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
                    <li><p className="week-temp-title">{props.days[0].date}</p></li>
                    <li className="week-temp-item">
                        <img src={props.days[0].weatherIcon} className="week-temp-item-img" alt="weather icon"/>
                    </li>
                    <li className="week-temp-item"><span className="week-temp-item-text"> Temperature :</span>
                        {kelvinToCelsius(props.days[0].temperature)}  °
                    </li>
                    <li className="week-temp-item"><span className="week-temp-item-text">Wind speed : </span>
                        {props.days[0].windSpeed} mps</li>
                    <li className="week-temp-item"><span className="week-temp-item-text">Wind direction : </span>
                        {windDirection(props.days[0].windDeg)}</li>

                    <li className="week-temp-item"><span className="week-temp-item-text">Clouds : </span>
                        {props.days[0].clouds} %</li>
                    <li className="week-temp-item"><span className="week-temp-item-text">Sea level : </span>
                        {props.days[0].seaLevel} m</li>
                </ul>
                    <span className='Week-border'></span>
                <ul className="Week-block">
                    <li><p className="week-temp-title">{props.days[1].date}</p></li>
                    <li className="week-temp-item">
                        <img src={props.days[1].weatherIcon} className="week-temp-item-img" alt="weather icon"/>
                    </li>
                    <li className="week-temp-item"><span className="week-temp-item-text"> Temperature :</span>
                        {kelvinToCelsius(props.days[1].temperature)}  °
                    </li>
                    <li className="week-temp-item"><span className="week-temp-item-text">Wind speed : </span>
                        {props.days[1].windSpeed} mps</li>
                    <li className="week-temp-item"><span className="week-temp-item-text">Wind direction : </span>
                        {windDirection(props.days[1].windDeg)}</li>

                    <li className="week-temp-item"><span className="week-temp-item-text">Clouds : </span>
                        {props.days[1].clouds} %</li>
                    <li className="week-temp-item"><span className="week-temp-item-text">Sea level : </span>
                        {props.days[1].seaLevel} m</li>
                </ul>
                <span className='Week-border'></span>

                <ul className="Week-block">
                    <li><p className="week-temp-title">{props.days[2].date}</p></li>
                    <li className="week-temp-item">
                        <img src={props.days[2].weatherIcon} className="week-temp-item-img" alt="weather icon"/>
                    </li>
                    <li className="week-temp-item"><span className="week-temp-item-text"> Temperature :</span>
                        {kelvinToCelsius(props.days[2].temperature)}  °
                    </li>
                    <li className="week-temp-item"><span className="week-temp-item-text">Wind speed : </span>
                        {props.days[2].windSpeed} mps</li>
                    <li className="week-temp-item"><span className="week-temp-item-text">Wind direction : </span>
                        {windDirection(props.days[2].windDeg)}</li>

                    <li className="week-temp-item"><span className="week-temp-item-text">Clouds : </span>
                        {props.days[2].clouds} %</li>
                    <li className="week-temp-item"><span className="week-temp-item-text">Sea level : </span>
                        {props.days[2].seaLevel} m</li>
                </ul>
                <span className='Week-border'></span>

                <ul className="Week-block">
                    <li><p className="week-temp-title">{props.days[3].date}</p></li>
                    <li className="week-temp-item">
                        <img src={props.days[3].weatherIcon} className="week-temp-item-img" alt="weather icon"/>
                    </li>
                    <li className="week-temp-item"><span className="week-temp-item-text"> Temperature :</span>
                        {kelvinToCelsius(props.days[3].temperature)}  °
                    </li>
                    <li className="week-temp-item"><span className="week-temp-item-text">Wind speed : </span>
                        {props.days[3].windSpeed} mps</li>
                    <li className="week-temp-item"><span className="week-temp-item-text">Wind direction : </span>
                        {windDirection(props.days[3].windDeg)}</li>

                    <li className="week-temp-item"><span className="week-temp-item-text">Clouds : </span>
                        {props.days[3].clouds} %</li>
                    <li className="week-temp-item"><span className="week-temp-item-text">Sea level : </span>
                        {props.days[3].seaLevel} m</li>
                </ul>
                <span className='Week-border'></span>

                <ul className="Week-block">
                    <li><p className="week-temp-title">{props.days[4].date}</p></li>
                    <li className="week-temp-item">
                        <img src={props.days[4].weatherIcon} className="week-temp-item-img" alt="weather icon"/>
                    </li>
                    <li className="week-temp-item"><span className="week-temp-item-text"> Temperature :</span>
                        {kelvinToCelsius(props.days[4].temperature)}  °
                    </li>
                    <li className="week-temp-item"><span className="week-temp-item-text">Wind speed : </span>
                        {props.days[4].windSpeed} mps</li>
                    <li className="week-temp-item"><span className="week-temp-item-text">Wind direction : </span>
                        {windDirection(props.days[4].windDeg)}</li>

                    <li className="week-temp-item"><span className="week-temp-item-text">Clouds : </span>
                        {props.days[4].clouds} %</li>
                    <li className="week-temp-item"><span className="week-temp-item-text">Sea level : </span>
                        {props.days[4].seaLevel} m</li>
                </ul>
                <span className='Week-border'></span>

                <ul className="Week-block">
                    <li><p className="week-temp-title">{props.days[5].date}</p></li>
                    <li className="week-temp-item">
                        <img src={props.days[5].weatherIcon} className="week-temp-item-img" alt="weather icon"/>
                    </li>
                    <li className="week-temp-item"><span className="week-temp-item-text"> Temperature :</span>
                        {kelvinToCelsius(props.days[5].temperature)}  °
                    </li>
                    <li className="week-temp-item"><span className="week-temp-item-text">Wind speed : </span>
                        {props.days[5].windSpeed} mps</li>
                    <li className="week-temp-item"><span className="week-temp-item-text">Wind direction : </span>
                        {windDirection(props.days[5].windDeg)}</li>

                    <li className="week-temp-item"><span className="week-temp-item-text">Clouds : </span>
                        {props.days[5].clouds} %</li>
                    <li className="week-temp-item"><span className="week-temp-item-text">Sea level : </span>
                        {props.days[5].seaLevel} m</li>
                </ul>
                <span className='Week-border'></span>

                <ul className="Week-block">
                    <li><p className="week-temp-title">{props.days[6].date}</p></li>
                    <li className="week-temp-item">
                        <img src={props.days[6].weatherIcon} className="week-temp-item-img" alt="weather icon"/>
                    </li>
                    <li className="week-temp-item"><span className="week-temp-item-text"> Temperature :</span>
                        {kelvinToCelsius(props.days[6].temperature)}  °
                    </li>
                    <li className="week-temp-item"><span className="week-temp-item-text">Wind speed : </span>
                        {props.days[6].windSpeed} mps</li>
                    <li className="week-temp-item"><span className="week-temp-item-text">Wind direction : </span>
                        {windDirection(props.days[6].windDeg)}</li>

                    <li className="week-temp-item"><span className="week-temp-item-text">Clouds : </span>
                        {props.days[6].clouds} %</li>
                    <li className="week-temp-item"><span className="week-temp-item-text">Sea level : </span>
                        {props.days[6].seaLevel} m</li>
                </ul>

            </div>
        </div>
    )
}
export default WeekWeather;