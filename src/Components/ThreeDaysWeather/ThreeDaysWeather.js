import React from "react";
import {kelvinToCelsius, windDirection} from "../../Components/CurrentWeather/CurrentWeather";
import "./ThreeDaysWeather.scss"

function ThreeDaysWeather(props) {
    return(
        <div className="Three-props">
            <div className="weather-props">
                <h2 className="weather-title">Three days weather Forecast</h2>
                <div className="weather-info">
                    <h2 className="weather-info-location_title">{props.location.city}
                    <span> {props.location.countryOfCity}</span></h2>

                </div>
            </div>
            <div className="ThreeDays-weather">
                <ul className="ThreeDays-block">
                    <li><p className="three-temp-title">{props.days[0].date}</p></li>
                    <li className="three-temp-item">
                        <img src={props.days[0].weatherIcon} className="three-temp-item-img" alt="weather icon"/>
                    </li>
                    <li className="three-temp-item"><span className="three-temp-item-text"> Temperature :</span>
                        {kelvinToCelsius(props.days[0].temperature)}  °
                    </li>
                    <li className="three-temp-item"><span className="three-temp-item-text">Max temperature : </span>
                        {kelvinToCelsius(props.days[0].maxTemperature)} °
                    </li>
                    <li className="three-temp-item"><span className="three-temp-item-text">Min temperature : </span>
                        {kelvinToCelsius(props.days[0].minTemperature)} °
                    </li>
                    <li className="three-temp-item"><span className="three-temp-item-text">Wind speed : </span>
                        {props.days[0].windSpeed} mps</li>
                    <li className="three-temp-item"><span className="three-temp-item-text">Wind direction : </span>
                        {windDirection(props.days[0].windDeg)}</li>

                    <li className="three-temp-item"><span className="three-temp-item-text">Clouds : </span>
                        {props.days[0].clouds} %</li>
                    <li className="three-temp-item"><span className="three-temp-item-text">Sea level : </span>
                        {props.days[0].seaLevel} m</li>
                </ul>

                <ul className="ThreeDays-block three-middle-block">
                    <li><p className="three-temp-title">{props.days[1].date}</p></li>
                    <li className="three-temp-item">
                        <img src={props.days[1].weatherIcon} className="three-temp-item-img" alt="weather icon"/>
                    </li>
                    <li className="three-temp-item"><span className="three-temp-item-text">Temperature :</span>
                        {kelvinToCelsius(props.days[1].temperature)}  °
                    </li>
                    <li className="three-temp-item"><span className="three-temp-item-text">Max temperature : </span>
                        {kelvinToCelsius(props.days[1].maxTemperature)} °
                    </li>
                    <li className="three-temp-item"><span className="three-temp-item-text">Min temperature : </span>
                        {kelvinToCelsius(props.days[1].minTemperature)} °
                    </li>
                    <li className="three-temp-item"><span className="three-temp-item-text">Wind speed : </span>
                        {props.days[1].windSpeed} mps</li>
                    <li className="three-temp-item"><span className="three-temp-item-text">Wind direction : </span>
                        {windDirection(props.days[1].windDeg)}</li>

                    <li className="three-temp-item"><span className="three-temp-item-text">Clouds : </span>
                        {props.days[1].clouds} %</li>
                    <li className="three-temp-item"><span className="three-temp-item-text">Sea level : </span>
                        {props.days[1].seaLevel} m</li>
                </ul>

                <ul className="ThreeDays-block">
                    <li><p className="three-temp-title">{props.days[1].date}</p></li>
                    <li className="three-temp-item">
                        <img src={props.days[1].weatherIcon} className="three-temp-item-img" alt="weather icon"/>
                    </li>
                    <li className="three-temp-item"><span className="three-temp-item-text">Temperature :</span>
                        {kelvinToCelsius(props.days[1].temperature)}  °
                    </li>
                    <li className="three-temp-item"><span className="three-temp-item-text">Max temperature : </span>
                        {kelvinToCelsius(props.days[1].maxTemperature)} °
                    </li>
                    <li className="three-temp-item"><span className="three-temp-item-text">Min temperature : </span>
                        {kelvinToCelsius(props.days[1].minTemperature)} °
                    </li>
                    <li className="three-temp-item"><span className="three-temp-item-text">Wind speed : </span>
                        {props.days[1].windSpeed} mps</li>
                    <li className="three-temp-item"><span className="three-temp-item-text">Wind direction : </span>
                        {windDirection(props.days[1].windDeg)}</li>

                    <li className="three-temp-item"><span className="three-temp-item-text">Clouds : </span>
                        {props.days[1].clouds} %</li>
                    <li className="three-temp-item"><span className="three-temp-item-text">Sea level : </span>
                        {props.days[1].seaLevel} m</li>
                </ul>


            </div>

        </div>
    )
}
export default ThreeDaysWeather;