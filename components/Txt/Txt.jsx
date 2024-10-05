import { Platform, Text, useWindowDimensions } from "react-native";

import { s } from "./Txt.style.js";
const BASE_RATIO = 0.001184834123222749;
export default function Txt({ children, style, ...restProps }) {
  const fontSize = style?.fontSize || s.txt.fontSize;
  const { height } = useWindowDimensions();
  console.log(Platform.OS,Math.round(fontSize * BASE_RATIO * height));

  return (
    <Text
      style={[
        s.txt,
        style,
        { fontSize: Math.round(fontSize * BASE_RATIO * height) },
      ]}
      {...restProps}
    >
      {children}
    </Text>
  );
}
