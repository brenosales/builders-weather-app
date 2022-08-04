import moment from 'moment';

const ICON_URL = process.env.REACT_APP_ICON_URL;

const getCurrentDayForecast = (data, city) => ({
    weekday: moment(data.dt_txt).format('dddd'),
    date: moment(data.dt_txt).format('MMMM Do'),
    location: city.name+'-'+city.country,
    temperature: Math.round(data.main.temp),
    weatherIcon: `${ICON_URL + data.weather[0].icon}@4x.png`,
    weatherDescription: data.weather[0].main,
});

export default getCurrentDayForecast;


//setWeatherIcon(`${ICON_URL + data.list[0].weather[0]["icon"]}@4x.png`)