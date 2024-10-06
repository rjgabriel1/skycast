import { Image, TouchableOpacity, View } from "react-native";
import Txt from "../Txt/Txt.jsx";
import { s } from "./WeatherBasic.style.js";
import Clock from "../Clock/Clock.jsx";
import { useNavigation } from "@react-navigation/native";
export default function WeatherBasic({ temperature, interpretation, city, dailyWeather }) {
  const nav = useNavigation();
  return (
    <>
      <View style={s.clock}>
        <Clock />
      </View>
      <View style={s.city}>
        <Txt>{city ? city : "City"}</Txt>
      </View>
      <View style={s.interpretation}>
        <Txt style={s.interpretation_text}>{interpretation.label}</Txt>
      </View>
      <View style={s.temp_container}>
        <TouchableOpacity
          onPress={() => nav.navigate("Forecast", { city, ...dailyWeather})}
        >
          <Txt style={s.temp}>{temperature}°</Txt>
        </TouchableOpacity>

        <Image style={s.image} source={interpretation?.image} />
      </View>
    </>
  );
}
