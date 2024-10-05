import { Text } from "react-native";

import { s } from "./Txt.style.js";
export default function Txt({ children, style, ...restProps }) {
  return (
    <Text style={[s.txt, style]} {...restProps}>
      {children}
    </Text>
  );
}
