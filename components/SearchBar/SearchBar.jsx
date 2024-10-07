import { View, Text, TextInput } from "react-native";
import { s } from "./SearchBar.style.js";
export default function SearchBar({ onSubmit }) {
  return (
    <TextInput
      placeholder="Type a city.."
      style={s.input}
      onSubmitEditing={(e) => onSubmit(e.nativeEvent.text)}
    />
  );
}
