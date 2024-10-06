import { View } from "react-native";
import Txt from "../Txt/Txt";
import { StyledContainer, StyledLabel, StyledValue, s } from "./weatherAdvanced.style";
export default function WeatherAdvanced({ sunrise, sunset, windSpeed }) {
  return (
    <View style={s.advanced_container}>
      <StyledContainer>
        <StyledValue>123{sunrise}</StyledValue>
        <StyledLabel>Sunrise</StyledLabel>
      </StyledContainer>
      <StyledContainer>
        <StyledValue>123{sunset}</StyledValue>
        <StyledLabel>Sunset</StyledLabel>
      </StyledContainer>
      <StyledContainer>
        <StyledValue>123{windSpeed}</StyledValue>
        <StyledLabel>Wind speed</StyledLabel>
      </StyledContainer>
    </View>
  );
}
