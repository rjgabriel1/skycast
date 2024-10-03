import { View, Text } from "react-native";
import { s } from "./Home.style";
export default function Home() {
  return (
    <>
      <View style={s.meteo_basic}>
        <Text>Basic info</Text>
      </View>
      <View style={s.search_container}>
        <Text>Input Section</Text>
      </View>
      <View style={s.meteo_advanced}>
        <Text>Advanced Info</Text>
      </View>
    </>
  );
}
