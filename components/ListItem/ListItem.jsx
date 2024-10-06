import { View, Text, Image } from "react-native";
import { s } from "./ListItem.style";
import Txt from "../Txt/Txt";

export default function ListItem({ image, day, date, temperature }) {
  return (
    <View style={s.container}>
      <Image source={image} style={s.image} />
      <Txt style={s.day}>{day}</Txt>
      <Txt style={s.date}>{date}</Txt>
      <Txt style={s.temp}>{temperature}</Txt>
    </View>
  );
}
