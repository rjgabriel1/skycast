import { View, Text } from "react-native";
import { s } from "./Home.style";
export default function Home() {
  return (
    <>
      <View style={s.meteo_basic}>
        <Text style={s.txt}>Basic info</Text>
      </View>
      <View style={s.search_container}>
        <Text style={s.txt}>Input Section</Text>
      </View>
      <View style={s.meteo_advanced}>
        <Text style={s.txt}>Advanced Info</Text>
      </View>
    </>
  );
}
