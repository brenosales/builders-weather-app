import { useState } from "react";
import axios from "axios";

import getCurrentDayDetailedForecast from "../helpers/getCurrentDayDetailedForecast";
import getCurrentDayForecast from "../helpers/getCurrentDayForecast"
import getUpcomingDaysForecast from "../helpers/getUpcomingDaysForecast";

const BASE_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

const useForecast = () => {
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [forecast, setForecast] = useState(null);

  const getForecastData = async (location) => {
    
    let how_to_search = (typeof location === 'string') ? `q=${location}` : `lat=${location[0]}&lon=${location[1]}`
  
    try {
      const { data } = await axios(`${BASE_URL+how_to_search}&appid=${API_KEY}&units=metric&cnt=5&exclude=hourly,minutely`);
     
      if(!data) {
        setLoading(false);
        setError('Location Not Found');
        setForecast(null)
        return;
      }

      return data;
     
    } catch (error) {
      setError('Location Not Found');
      setLoading(false);
      console.log(error);
      return;
    }
  };

  const processForecastData = (data) => {
    const currentDay = getCurrentDayForecast(data.list[0], data.city);
    const currentDayDetails = getCurrentDayDetailedForecast(data.list[0]);
    const upcomingDays = getUpcomingDaysForecast(data.list);

    setForecast({currentDay, currentDayDetails, upcomingDays});
    setLoading(false);
  }
  

  const submitRequest = async (location) => {
    setLoading(true);
    setError(false);

    const data = await getForecastData(location);
    if (!data) return;
    processForecastData(data);
  }

  return {
    isError,
    isLoading,
    forecast,
    submitRequest
  }
}

export default useForecast;