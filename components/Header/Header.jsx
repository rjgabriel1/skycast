import { TouchableOpacity, View } from "react-native";
import { s } from "./Header.style";
import Txt from "../Txt/Txt";
import { useNavigation } from "@react-navigation/native";

export default function Header({ city }) {
  const nav = useNavigation();
  return (
    <View style={s.container}>
      <TouchableOpacity onPress={() => nav.goBack} style={s.back_btn}>
        <Txt>{"<"}</Txt>
      </TouchableOpacity>
      <View style={s.header_texts}>
        <Txt style={s.city_txt}>{city.toUpperCase()}</Txt>
        <Txt style={s.subtitle}>7 days forecasts</Txt>
      </View>
    </View>
  );
}
