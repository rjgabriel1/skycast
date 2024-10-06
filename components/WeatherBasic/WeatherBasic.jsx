import { Image, View } from "react-native";
import Txt from "../Txt/Txt.jsx";
import { s } from "./WeatherBasic.style.js";
import Clock from "../Clock/Clock.jsx";
export default function WeatherBasic({ temperature, interpretation,city }) {
  return (
    <>
      <View style={s.clock}>
        <Clock />
      </View>
      <View style={s.city}>
        <Txt>{ city? city:"City"}</Txt>
      </View>
      <View style={s.interpretation}>
        <Txt style={s.interpretation_text}>{interpretation.label}</Txt>
      </View>
      <View style={s.temp_container}>
        <Txt style={s.temp}>{temperature}°</Txt>
        <Image style={s.image} source={interpretation?.image} />
      </View>
    </>
  );
}
