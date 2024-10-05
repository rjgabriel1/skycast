import { View, Text } from "react-native";
import { s } from "./Clock.style.js";
import Txt from "../Txt/Txt.jsx";
import { nowToHHMM } from "../../utils/date-time.js";
export default function Clock() {
  return (
    <View>
      <Txt>{nowToHHMM()}</Txt>
    </View>
  );
}
