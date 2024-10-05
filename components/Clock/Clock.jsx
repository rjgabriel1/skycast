import { View, Text } from "react-native";
import { s } from "./Clock.style.js";
import Txt from "../Txt/Txt.jsx";
import { nowToHHMM } from "../../utils/date-time.js";
import { useEffect, useState } from "react";
export default function Clock() {
  const [time, setTime] = useState(nowToHHMM());
  useEffect(() => {
    setInterval(() => {
      setTime(nowToHHMM());
    }, 1000);
  }, []);


  return (
    <View>
      <Txt style={s.time}>{time}</Txt>
    </View>
  );
}
