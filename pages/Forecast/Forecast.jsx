import { View } from "react-native";
import Txt from "../../components/Txt/Txt";
import { s } from "./Forecast.style";
import { useRoute } from "@react-navigation/native";
import Header from "../../components/Header/Header";
import ListItem from "../../components/ListItem/ListItem";
import { getWeatherInterpretation, DAYS } from "../../utils/weather-utils";

export default function Forecast() {
  const { params } = useRoute();
  console.log(params);

  const ForecastList = (
    <View style={{ marginTop: 50 }}>
      {params.time.map((time, index) => {
        const weatherCode = params?.weathercode[index];
        const img = getWeatherInterpretation(weatherCode).image;
        const temp = params.temperature_2m_max[index];
        const date = new Date(time);
        date.setDate(date.getDate() + 1);
        console.log(date.getDay());
        const day = DAYS[index];
        const formatedDate = date.toLocaleDateString("default", {
          day: "numeric",
          month: "numeric",
        });
        return (
          <ListItem
            key={time}
            image={img}
            day={day}
            date={formatedDate}
            temperature={temp}
          />
        );
      })}
    </View>
  );
  return (
    <View>
      <Header city={params?.city} />
      {ForecastList}
    </View>
  );
}
