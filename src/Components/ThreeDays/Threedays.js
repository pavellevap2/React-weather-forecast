import React from "react";
import {kelvinToCelsius, windDirection} from "../../Components/CurrentWeather/CurrentWeather";
import "./ThreeDays.scss"

function ThreeDays(props) {
    return(
        <div>
            <h2 className="weather-title">Three days weather Forecast</h2>
            <div className="weather-info">
                <h2 className="weather-info-location_title">{props.location.city}
                    <span className="Current-info-city"> {props.location.countryOfCity}</span>
                </h2>
                <p className="weather-info-description">({props.weather.description})</p>
            </div>

            <div className="Current-weather">
                <ul className="weather-block">
                    <li><p className="temp-title">Temperature</p></li>
                    <li className="temp-item"><img src={props.weather.weatherIcon} className="temp-item-img" alt="weather icon"/></li>
                    <li className="temp-item"><span className="temp-item-text">Temperature :</span>
                        {kelvinToCelsius(props.weather.temperature)}  °
                    </li>
                    <li className="temp-item"><span className="temp-item-text">Max temperature : </span>
                        {kelvinToCelsius(props.weather.maxTemperature)} °
                    </li>
                    <li className="temp-item"><span className="temp-item-text">Min temperature : </span>
                        {kelvinToCelsius(props.weather.minTemperature)} °
                    </li>
                    <li className="temp-item"><span className="temp-item-text">Humidity : </span>
                        {props.weather.humidity}</li>
                </ul>

                <ul className="weather-block m-weather">
                    <li><p className="temp-title">Wind</p></li>
                    <li className="temp-item"><img src={props.imgWind} className="temp-item-img flag" alt="wind"/></li>
                    <li className="temp-item"><span className="temp-item-text">Wind speed : </span>
                        {props.weather.windSpeed} mps</li>
                    <li className="temp-item"><span className="temp-item-text">Wind direction : </span>
                        {windDirection(props.weather.windDeg)}</li>
                </ul>

                <ul className="weather-block">
                    <li><p className="temp-title">Other</p></li>
                    <li className="temp-item"><img src={props.imgCloud} className="temp-item-img" alt="cloud"/></li>
                    <li className="temp-item"><span className="temp-item-text">Pressure : </span>
                        {props.weather.pressure} </li>
                    <li className="temp-item"><span className="temp-item-text">Clouds : </span>
                        {props.weather.clouds} %</li>
                    <li className="temp-item"><span className="temp-item-text">Sea level : </span>
                        {props.weather.seaLevel} m</li>
                </ul>
            </div>

        </div>
    )
}
export default ThreeDays;