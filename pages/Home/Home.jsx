import { View } from "react-native";
import { s } from "./Home.style";
import Txt from "../../components/Txt/Txt";
export default function Home() {
  return (
    <>
      <View style={s.meteo_basic}>
        <Txt onPress={()=>console.log("hello")}>Head</Txt>
      </View>
      <View style={s.search_container}>
        <Txt >Input Section</Txt>
      </View>
      <View style={s.meteo_advanced}>
        <Txt>Advanced Info</Txt>
      </View>
    </>
  );
}
