import React from "react";
import {kelvinToCelsius, windDirection} from "../CurrentWeather/CurrentWeather";
import "./WeekWeather.css";

function WeekWeather(props) {
    return(
        <div>
            <div className="Week-props">
                <h2 className="Week-title">Week weather Forecast</h2>
                <div className="Week-info">
                    <h2 className="Week-info-location_title">{props.location.city}
                        <span className="Week-info-city"> {props.location.countryOfCity}</span>
                    </h2>
                </div>
            </div>
            <div className="Week-weather">
                <ul className="Week-block">
                    <li><p className="week-temp-title">{props.firstDay.date}</p></li>
                    <li className="week-temp-item">
                        <img src={props.firstDay.weatherIcon} className="week-temp-item-img" alt="weather icon"/>
                    </li>
                    <li className="week-temp-item"><span className="week-temp-item-text"> Temperature :</span>
                        {kelvinToCelsius(props.firstDay.temperature)}  °
                    </li>
                    <li className="week-temp-item"><span className="week-temp-item-text">Wind speed : </span>
                        {props.firstDay.windSpeed} mps</li>
                    <li className="week-temp-item"><span className="week-temp-item-text">Wind direction : </span>
                        {windDirection(props.firstDay.windDeg)}</li>

                    <li className="week-temp-item"><span className="week-temp-item-text">Clouds : </span>
                        {props.firstDay.clouds} %</li>
                    <li className="week-temp-item"><span className="week-temp-item-text">Sea level : </span>
                        {props.firstDay.seaLevel} m</li>
                </ul>
                    <span className='Week-border'></span>
                <ul className="Week-block">
                    <li><p className="week-temp-title">{props.secondDay.date}</p></li>
                    <li className="week-temp-item">
                        <img src={props.secondDay.weatherIcon} className="week-temp-item-img" alt="weather icon"/>
                    </li>
                    <li className="week-temp-item"><span className="week-temp-item-text"> Temperature :</span>
                        {kelvinToCelsius(props.secondDay.temperature)}  °
                    </li>
                    <li className="week-temp-item"><span className="week-temp-item-text">Wind speed : </span>
                        {props.secondDay.windSpeed} mps</li>
                    <li className="week-temp-item"><span className="week-temp-item-text">Wind direction : </span>
                        {windDirection(props.secondDay.windDeg)}</li>

                    <li className="week-temp-item"><span className="week-temp-item-text">Clouds : </span>
                        {props.secondDay.clouds} %</li>
                    <li className="week-temp-item"><span className="week-temp-item-text">Sea level : </span>
                        {props.secondDay.seaLevel} m</li>
                </ul>
                <span className='Week-border'></span>

                <ul className="Week-block">
                    <li><p className="week-temp-title">{props.thirdDay.date}</p></li>
                    <li className="week-temp-item">
                        <img src={props.thirdDay.weatherIcon} className="week-temp-item-img" alt="weather icon"/>
                    </li>
                    <li className="week-temp-item"><span className="week-temp-item-text"> Temperature :</span>
                        {kelvinToCelsius(props.thirdDay.temperature)}  °
                    </li>
                    <li className="week-temp-item"><span className="week-temp-item-text">Wind speed : </span>
                        {props.thirdDay.windSpeed} mps</li>
                    <li className="week-temp-item"><span className="week-temp-item-text">Wind direction : </span>
                        {windDirection(props.thirdDay.windDeg)}</li>

                    <li className="week-temp-item"><span className="week-temp-item-text">Clouds : </span>
                        {props.thirdDay.clouds} %</li>
                    <li className="week-temp-item"><span className="week-temp-item-text">Sea level : </span>
                        {props.thirdDay.seaLevel} m</li>
                </ul>
                <span className='Week-border'></span>

                <ul className="Week-block">
                    <li><p className="week-temp-title">{props.fourthDay.date}</p></li>
                    <li className="week-temp-item">
                        <img src={props.fourthDay.weatherIcon} className="week-temp-item-img" alt="weather icon"/>
                    </li>
                    <li className="week-temp-item"><span className="week-temp-item-text"> Temperature :</span>
                        {kelvinToCelsius(props.fourthDay.temperature)}  °
                    </li>
                    <li className="week-temp-item"><span className="week-temp-item-text">Wind speed : </span>
                        {props.fourthDay.windSpeed} mps</li>
                    <li className="week-temp-item"><span className="week-temp-item-text">Wind direction : </span>
                        {windDirection(props.fourthDay.windDeg)}</li>

                    <li className="week-temp-item"><span className="week-temp-item-text">Clouds : </span>
                        {props.fourthDay.clouds} %</li>
                    <li className="week-temp-item"><span className="week-temp-item-text">Sea level : </span>
                        {props.fourthDay.seaLevel} m</li>
                </ul>
                <span className='Week-border'></span>

                <ul className="Week-block">
                    <li><p className="week-temp-title">{props.fifthDay.date}</p></li>
                    <li className="week-temp-item">
                        <img src={props.fifthDay.weatherIcon} className="week-temp-item-img" alt="weather icon"/>
                    </li>
                    <li className="week-temp-item"><span className="week-temp-item-text"> Temperature :</span>
                        {kelvinToCelsius(props.fifthDay.temperature)}  °
                    </li>
                    <li className="week-temp-item"><span className="week-temp-item-text">Wind speed : </span>
                        {props.fifthDay.windSpeed} mps</li>
                    <li className="week-temp-item"><span className="week-temp-item-text">Wind direction : </span>
                        {windDirection(props.fifthDay.windDeg)}</li>

                    <li className="week-temp-item"><span className="week-temp-item-text">Clouds : </span>
                        {props.fifthDay.clouds} %</li>
                    <li className="week-temp-item"><span className="week-temp-item-text">Sea level : </span>
                        {props.fifthDay.seaLevel} m</li>
                </ul>
                <span className='Week-border'></span>

                <ul className="Week-block">
                    <li><p className="week-temp-title">{props.sixthDay.date}</p></li>
                        <li className="week-temp-item">
                        <img src={props.sixthDay.weatherIcon} className="week-temp-item-img" alt="weather icon"/>
                    </li>
                    <li className="week-temp-item"><span className="week-temp-item-text"> Temperature :</span>
                        {kelvinToCelsius(props.sixthDay.temperature)}  °
                    </li>
                    <li className="week-temp-item"><span className="week-temp-item-text">Wind speed : </span>
                        {props.sixthDay.windSpeed} mps</li>
                    <li className="week-temp-item"><span className="week-temp-item-text">Wind direction : </span>
                        {windDirection(props.sixthDay.windDeg)}</li>

                    <li className="week-temp-item"><span className="week-temp-item-text">Clouds : </span>
                        {props.sixthDay.clouds} %</li>
                    <li className="week-temp-item"><span className="week-temp-item-text">Sea level : </span>
                        {props.sixthDay.seaLevel} </li>
                </ul>
                <span className='Week-border'></span>

                <ul className="Week-block">
                    <li><p className="week-temp-title">{props.seventhDay.date}</p></li>
                    <li className="week-temp-item">
                        <img src={props.seventhDay.weatherIcon} className="week-temp-item-img" alt="weather icon"/>
                    </li>
                    <li className="week-temp-item"><span className="week-temp-item-text"> Temperature :</span>
                        {kelvinToCelsius(props.seventhDay.temperature)}  °
                    </li>
                    <li className="week-temp-item"><span className="week-temp-item-text">Wind speed : </span>
                        {props.seventhDay.windSpeed} mps</li>
                    <li className="week-temp-item"><span className="week-temp-item-text">Wind direction : </span>
                        {windDirection(props.seventhDay.windDeg)}</li>

                    <li className="week-temp-item"><span className="week-temp-item-text">Clouds : </span>
                        {props.seventhDay.clouds} %</li>
                    <li className="week-temp-item"><span className="week-temp-item-text">Sea level : </span>
                        {props.seventhDay.seaLevel} m</li>
                </ul>

            </div>
        </div>
    )
}
export default WeekWeather;