import { s } from "./App.style";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Home from "./pages/Home/Home";
import Forecast from "./pages/Forecast/Forecast";
import { ImageBackground } from "react-native";
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
  }, []);

  useEffect(() => {
    if (coordinates) {
      fetchWeatherFromCoords(coordinates);
      fetchCityFromCoords(coordinates);
    }
  }, [coordinates]);

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

  async function getUserCoordinates() {
    const { status } = await requestForegroundPermissionsAsync();
    if (status === "granted") {
      const location = await getCurrentPositionAsync();
      setCoordinates({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      });
    } else {
      setCoordinates({ lat: "48.85", lng: "2.35" });
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
                screenOptions={{ headerShown: false }}
              >
                <Stack.Screen name="Home">
                  {() => <Home city={city} weather={weather} />}
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
