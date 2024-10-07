import { View } from "react-native";
import { s } from "./Home.style";
import Txt from "../../components/Txt/Txt";
import WeatherBasic from "../../components/WeatherBasic/WeatherBasic";
import { getWeatherInterpretation } from "../../utils/weather-utils";
import WeatherAdvanced from "../../components/WeatherAdvanced/WeatherAdvanced";
import SearchBar from "../../components/SearchBar/SearchBar";

export default function Home({ weather, city,onSubmitSearch }) {
  const CurrentWeather = weather?.current_weather;
  const currentInterpretation = getWeatherInterpretation(
    CurrentWeather.weathercode
  );

  const sunrise = weather.daily.sunrise[0].split("T")[1];
  const sunset = weather.daily.sunset[0].split("T")[1];
  return (
    <>
      <View style={s.meteo_basic}>
        <WeatherBasic
          dailyWeather={weather.daily}
          temperature={Math.round(CurrentWeather.temperature)}
          interpretation={currentInterpretation}
          city={city}
        />
      </View>
      <View style={s.search_container}>
        <SearchBar  onSubmit={onSubmitSearch}/>
      </View>
      <View style={s.meteo_advanced}>
        <WeatherAdvanced
          sunrise={sunrise}
          sunset={sunset}
          windSpeed={CurrentWeather.windspeed}
        />
      </View>
    </>
  );
}
