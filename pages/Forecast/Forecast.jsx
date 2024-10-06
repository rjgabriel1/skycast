import { View } from "react-native";
import Txt from "../../components/Txt/Txt";
import { s } from "./Forecast.style";
import { useRoute } from "@react-navigation/native";
import Header from "../../components/Header/Header";
export default function Forecast() {
  const { params } = useRoute();
  console.log(params);

  return (
    <View>
      <Header city={params?.city} />
    </View>
  );
}
