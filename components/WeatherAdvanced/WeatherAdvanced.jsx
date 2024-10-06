import { View } from "react-native";
import Txt from "../Txt/Txt";
import { StyledContainer, StyledLabel, StyledValue, s } from "./weatherAdvanced.style";
export default function WeatherAdvanced({ sunrise, sunset, windSpeed }) {
  return (
    <View style={s.advanced_container}>
      <StyledContainer>
        <StyledValue>{sunrise}</StyledValue>
        <StyledLabel>Sunrise</StyledLabel>
      </StyledContainer>
      <StyledContainer>
        <StyledValue>{sunset}</StyledValue>
        <StyledLabel>Sunset</StyledLabel>
      </StyledContainer>
      <StyledContainer>
        <StyledValue>{windSpeed} km/h</StyledValue>
        <StyledLabel>Wind speed</StyledLabel>
      </StyledContainer>
    </View>
  );
}
