import { View } from "react-native";
import { s } from "./Home.style";
import Txt from "../../components/Txt/Txt";
import WeatherBasic from "../../components/WeatherBasic/WeatherBasic";
import { getWeatherInterpretation } from "../../utils/weather-utils";
import WeatherAdvanced from '../../components/WeatherAdvanced/WeatherAdvanced'

export default function Home({ weather, city }) {
  const CurrentWeather = weather?.current_weather;
  const currentInterpretation = getWeatherInterpretation(
    CurrentWeather.weathercode
  );
  return (
    <>
      <View style={s.meteo_basic}>
        <WeatherBasic
          temperature={Math.round(CurrentWeather.temperature)}
          interpretation={currentInterpretation}
          city={city}
        />
      </View>
      <View style={s.search_container}>
        <Txt>Input Section</Txt>
      </View>
      <View style={s.meteo_advanced}>
        <WeatherAdvanced/>
      </View>
    </>
  );
}
