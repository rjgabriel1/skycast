import { View } from "react-native";
import Txt from "../../components/Txt/Txt";
import { s } from "./Forecast.style";
import { useRoute } from "@react-navigation/native";
import Header from "../../components/Header/Header";
import ListItem from "../../components/ListItem/ListItem";
export default function Forecast() {
  const { params } = useRoute();
  console.log(params);

  return (
    <View>
      <Header city={params?.city} />
      <ListItem
        image={require("../../assets/clouds.png")}
        day={"FRI"}
        date="14/24"
        temperature={"20"}
      />
      <ListItem
        image={require("../../assets/clouds.png")}
        day={"FRI"}
        date="14/24"
        temperature={"20"}
      />
      <ListItem
        image={require("../../assets/clouds.png")}
        day={"FRI"}
        date="14/24"
        temperature={"20"}
      />
    </View>
  );
}
