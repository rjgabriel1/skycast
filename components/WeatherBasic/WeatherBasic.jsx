import { Image, View } from "react-native";
import Txt from "../Txt/Txt.jsx";
import { s } from "./WeatherBasic.style.js";
export default function WeatherBasic({ temperature, interpretation }) {
  return (
    <>
      <View style={s.clock}>
        <Txt>Clock</Txt>
      </View>
      <View style={s.city}>
        <Txt>City</Txt>
      </View>
      <View style={s.interpretation}>
        <Txt style={s.interpretation_text}>{ interpretation.label}</Txt>
      </View>
      <View style={s.temp_container}>
        <Txt style={s.temp}>{temperature}°</Txt>
        <Image
          style={s.image}
          source={interpretation?.image}
        />
      </View>
    </>
  );
}
