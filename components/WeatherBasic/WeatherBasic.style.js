import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  clock: { alignItems: "flex-end" },
  city: {},
  interpretation: {
    alignSelf: "flex-end",
    transform: [{ rotate: "-90deg" }],
  },
  interpretation_text: { fontSize: 20 },
  temp_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  temp: {
    fontSize: 100,
  },
  image: { height: 70, width: 70, },
});
