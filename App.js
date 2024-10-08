import { s } from "./App.style";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Home from "./pages/Home/Home";
import Forecast from "./pages/Forecast/Forecast";
import { Alert, ImageBackground, Platform } from "react-native";
import background from "./assets/background.png";
import { useEffect, useState } from "react";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";
import { useFonts } from "expo-font";
import { WeatherAPI } from "./api/weather";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Notifications from "expo-notifications";
import * as Device from "expo-device";
import Constants from "expo-constants";


const Stack = createNativeStackNavigator();
const navTheme = {
  colors: {
    background: "transparent",
  },
};
export default function App() {
  const [coordinates, setCoordinates] = useState();
  const [weather, setWeather] = useState();
  const [city, setCity] = useState();

  const [isFontLoaded] = useFonts({
    "Alata-Regular": require("./assets/fonts/Alata-Regular.ttf"),
  });

  useEffect(() => {
    getUserCoordinates();
    registerForNotifications();
  }, []);

  useEffect(() => {
    if (coordinates) {
      fetchWeatherFromCoords(coordinates);
      fetchCityFromCoords(coordinates);
    }
  }, [coordinates]);

  async function registerForNotifications() {
    let token;

    if (Platform.OS === "android") {
      try {
        await Notifications.setNotificationChannelAsync("default", {
          name: "default",
          importance: Notifications.AndroidImportance.MAX,
          vibrationPattern: [0, 250, 250, 250],
          lightColor: "#FF231F7C",
        });
      } catch (error) {}
    }
    if (Device.isDevice) {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        alert("Failed to get push token for push notification!");
        return;
      }
      token = (
        await Notifications.getExpoPushTokenAsync({
          projectId:
            Constants?.expoConfig?.extra?.eas?.projectId ??
            Constants?.easConfig?.projectId,
        })
      ).data;
      console.log("token", token);
    } else {
      alert("Must use physical device for Push Notifications");
    }

    return token;
  }

  async function fetchWeatherFromCoords(coords) {
    try {
      const weatherRes = await WeatherAPI.fetchWeatherByCoords(coords);
      setWeather(weatherRes);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setWeather(null); // or handle the error state as needed
    }
  }

  async function fetchCityFromCoords(coords) {
    try {
      const cityRes = await WeatherAPI.getCityByCoords(coords);
      setCity(cityRes);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setCity(null); // or handle the error state as needed
    }
  }
  async function fetchCoordsbyCity(city) {
    try {
      const coordsRes = await WeatherAPI.fetchCoordsByCity(city);
      setCoordinates(coordsRes);
    } catch (error) {
      Alert.alert("Aouch!", error);
    }
  }

  async function getUserCoordinates() {
    const { status } = await requestForegroundPermissionsAsync();
    if (status === "granted") {
      const location = await getCurrentPositionAsync();
      setCoordinates({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      });
    } else {
      setCoordinates({ lat: "17.99702", lng: "-76.79358" });
    }
  }

  return (
    <NavigationContainer theme={navTheme}>
      <ImageBackground
        source={background}
        style={s.img_background}
        imageStyle={s.img}
      >
        <SafeAreaProvider>
          <SafeAreaView style={s.container}>
            {isFontLoaded && weather && (
              <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{ headerShown: false, animation: "fade" }}
              >
                <Stack.Screen name="Home">
                  {() => (
                    <Home
                      city={city}
                      weather={weather}
                      onSubmitSearch={fetchCoordsbyCity}
                    />
                  )}
                </Stack.Screen>
                <Stack.Screen name="Forecast" component={Forecast} />
              </Stack.Navigator>
            )}
          </SafeAreaView>
        </SafeAreaProvider>
      </ImageBackground>
    </NavigationContainer>
  );
}
