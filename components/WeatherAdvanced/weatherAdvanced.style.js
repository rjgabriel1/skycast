import { StyleSheet, View } from "react-native";
import Txt from "../Txt/Txt";

const s = StyleSheet.create({
  advanced_container: {
    flexDirection: "row",
    flex: 1,
    backgroundColor: "#00000063",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 10,
  },
});

function StyledContainer({ children }) {
  return <View style={{ alignItems: "center" }}>{children}</View>;
}
function StyledLabel({ children }) {
  return <Txt style={{ fontSize: 15 }}>{children}</Txt>;
}
function StyledValue({ children }) {
  return <Txt style={{ fontSize: 20 }}>{children}</Txt>;
}



export { s, StyledContainer, StyledLabel, StyledValue };
