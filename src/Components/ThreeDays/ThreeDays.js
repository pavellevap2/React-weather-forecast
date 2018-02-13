import React from "react";
import {kelvinToCelsius, windDirection} from "../../Components/CurrentWeather/CurrentWeather";
import "./ThreeDays.scss"

function ThreeDays(props) {
    return(
        <div>
            <div className="weather-props">
                <h2 className="weather-title">Three days weather Forecast</h2>
                <div className="weather-info">
                    <h2 className="weather-info-location_title">{props.location.city}
                        <span className="Current-info-city"> {props.location.countryOfCity}</span>
                    </h2>
                    <p className="weather-info-description">({props.firstDay.description})</p>
                </div>
            </div>
            <div className="ThreeDays-weather">
                <ul className="ThreeDays-block">
                    <li><p className="three-temp-title">{props.firstDay.date}</p></li>
                    <li className="three-temp-item">
                        <img src={props.firstDay.weatherIcon} className="three-temp-item-img" alt="weather icon"/>
                    </li>
                    <li className="three-temp-item"><span className="three-temp-item-text">Temperature :</span>
                        {kelvinToCelsius(props.firstDay.temperature)}  °
                    </li>
                    <li className="three-temp-item"><span className="three-temp-item-text">Max temperature : </span>
                        {kelvinToCelsius(props.firstDay.maxTemperature)} °
                    </li>
                    <li className="three-temp-item"><span className="three-temp-item-text">Min temperature : </span>
                        {kelvinToCelsius(props.firstDay.minTemperature)} °
                    </li>
                    <li className="three-temp-item"><span className="three-temp-item-text">Wind speed : </span>
                        {props.firstDay.windSpeed} mps</li>
                    <li className="three-temp-item"><span className="three-temp-item-text">Wind direction : </span>
                        {windDirection(props.firstDay.windDeg)}</li>

                    <li className="three-temp-item"><span className="three-temp-item-text">Clouds : </span>
                        {props.firstDay.clouds} %</li>
                    <li className="three-temp-item"><span className="three-temp-item-text">Sea level : </span>
                        {props.firstDay.seaLevel} m</li>
                </ul>

                <ul className="ThreeDays-block">
                    <li><p className="three-temp-title">{props.secondDay.date}</p></li>
                    <li className="three-temp-item">
                        <img src={props.secondDay.weatherIcon} className="three-temp-item-img" alt="weather icon"/>
                    </li>
                    <li className="three-temp-item"><span className="three-temp-item-text">Temperature :</span>
                        {kelvinToCelsius(props.secondDay.temperature)}  °
                    </li>
                    <li className="three-temp-item"><span className="three-temp-item-text">Max temperature : </span>
                        {kelvinToCelsius(props.secondDay.maxTemperature)} °
                    </li>
                    <li className="three-temp-item"><span className="three-temp-item-text">Min temperature : </span>
                        {kelvinToCelsius(props.secondDay.minTemperature)} °
                    </li>
                    <li className="three-temp-item"><span className="three-temp-item-text">Wind speed : </span>
                        {props.secondDay.windSpeed} mps</li>
                    <li className="three-temp-item"><span className="three-temp-item-text">Wind direction : </span>
                        {windDirection(props.secondDay.windDeg)}</li>

                    <li className="three-temp-item"><span className="three-temp-item-text">Clouds : </span>
                        {props.secondDay.clouds} %</li>
                    <li className="three-temp-item"><span className="three-temp-item-text">Sea level : </span>
                        {props.secondDay.seaLevel} m</li>
                </ul>

                <ul className="ThreeDays-block">
                    <li><p className="three-temp-title">{props.thirdDay.date}</p></li>
                    <li className="three-temp-item">
                        <img src={props.thirdDay.weatherIcon} className="three-temp-item-img" alt="weather icon"/>
                    </li>
                    <li className="three-temp-item"><span className="three-temp-item-text">Temperature :</span>
                        {kelvinToCelsius(props.thirdDay.temperature)}  °
                    </li>
                    <li className="three-temp-item"><span className="three-temp-item-text">Max temperature : </span>
                        {kelvinToCelsius(props.thirdDay.maxTemperature)} °
                    </li>
                    <li className="three-temp-item"><span className="three-temp-item-text">Min temperature : </span>
                        {kelvinToCelsius(props.thirdDay.minTemperature)} °
                    </li>
                    <li className="three-temp-item"><span className="three-temp-item-text">Wind speed : </span>
                        {props.thirdDay.windSpeed} mps</li>
                    <li className="three-temp-item"><span className="three-temp-item-text">Wind direction : </span>
                        {windDirection(props.thirdDay.windDeg)}</li>

                    <li className="three-temp-item"><span className="three-temp-item-text">Clouds : </span>
                        {props.thirdDay.clouds} %</li>
                    <li className="three-temp-item"><span className="three-temp-item-text">Sea level : </span>
                        {props.thirdDay.seaLevel} m</li>
                </ul>


            </div>

        </div>
    )
}
export default ThreeDays;