const getCurrentDayDetailedForecast = data => [
    {
        name: 'weather',
        value: data.weather[0].description,
        unit: '',
    },
    {
        name: 'humidity',
        value: data.main.humidity.toString(),
        unit: '%',
    },
    {
        name: 'feels like',
        value: Math.round(data.main.feels_like).toString(),
        unit: '°C',
    },
    {
        name: 'air pressure',
        value: data.main.pressure.toString(),
        unit: 'mb',
    },
    {
        name: 'max temp',
        value: Math.round(data.main.temp_max).toString(),
        unit: '°C',
    },
    {
        name: 'min temp',
        value: Math.round(data.main.temp_min).toString(),
        unit: '°C',
    },
];

export default getCurrentDayDetailedForecast;
