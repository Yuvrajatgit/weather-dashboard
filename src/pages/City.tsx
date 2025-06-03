import { useSearchParams, useParams } from "react-router-dom";
import { useForecastQuery, useWeatherQuery } from "@/hooks/useWeather";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import WeatherSkeleton from "@/components/LoadingSkeleton";
import CurrentWeather from "@/components/CurrentWeather";
import HourlyTemperature from "@/components/HourlyTemperature";
import WeatherDetails from "@/components/WeatherDetails";
import WeatherForecast from "@/components/WeatherForecast";
import { AlertTriangle } from "lucide-react";
import FavouritesButton from "@/components/FavouritesButton";

const City = () => {
  const [searchParams] = useSearchParams();
  const params = useParams();
  const lat = parseFloat(searchParams.get("lat") || "0");
  const lon = parseFloat(searchParams.get("lon") || "0");
  const coordinates = { lat, lon };
  const forecastQuery = useForecastQuery(coordinates);
  const weatherQuery = useWeatherQuery(coordinates);

  if (weatherQuery.error || forecastQuery.error) {
    return (
      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription className="flex flex-col gap-4">
          Failed to load weather data. Please try again
        </AlertDescription>
      </Alert>
    );
  }

  if (!weatherQuery.data || !forecastQuery.data || !params.cityName) {
    return <WeatherSkeleton/>
  }

  return  <div className="space-y-4">
  <div className="flex items-center justify-between">
    <h1 className="text-3xl font-bold tracking-tight">{params.cityName}, {weatherQuery.data.sys.country}</h1>
    <div>{<FavouritesButton data={{...weatherQuery.data, name: params.cityName}}/>}</div>
  </div>

  <div className="grid gap-6">
    <div className="flex flex-col gap-4">
      <CurrentWeather data={weatherQuery.data} />
      <HourlyTemperature data={forecastQuery.data} />
    </div>

    <div className="grid gap-6 md:grid-cols-2 items-start">
      <WeatherDetails data={weatherQuery.data}/>
      <WeatherForecast data={forecastQuery.data}/>
    </div>

  </div>
</div>
};

export default City;
