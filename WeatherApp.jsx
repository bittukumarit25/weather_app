import { useState } from 'react';
import SearchBox from './SearchBox';
import InfoBox from './InfoBox';


export default function WeatherApp() {
    const [WeatherInfon, setweatherInfo] = useState({ newInfo:{
        city: "Bihar",
        feelslike: 24.84,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        weather: "haze",
    }});
    let updateInfo = (newinfo) => {
        setweatherInfo(newinfo);
    }
    return (
        <div style={{ textAlign: "center" }}>
            <h2>Weather App By Delta</h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={WeatherInfon.newInfo} />

        </div>
    );
}