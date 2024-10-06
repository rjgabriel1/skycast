import { StyleSheet } from "react-native";

const s = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  image: {
    height: 40,
    width: 40,
  },
  day: {
    fontSize: 20,
  },
  date: {
    fontSize: 20,
  },
  temp: {
    fontSize: 20,
    minWidth: 50,
    textAlign: "right",
  },
});

export { s };
