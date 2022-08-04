import moment from 'moment';

const ICON_URL = process.env.REACT_APP_ICON_URL;

const getWeekday = date => moment(date).format('dddd').substring(0, 3);
const getHour = date => moment(date).hours();

const getUpcomingDaysForecast = data =>

    data.slice(1).map(day => ({
        imgUrl: `${ICON_URL + day.weather[0].icon}.png`,
        temperature: Math.round(day.main.temp_max),
        hour: getHour(day.dt_txt) +"h " + getWeekday(day.dt_txt),
    }));

export default getUpcomingDaysForecast;
