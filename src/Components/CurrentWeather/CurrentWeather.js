import React from "react"

let kelvinToCelsius = (temp) => {
    return  Math.floor(temp - 273.15);
};

let windDirection = (deg) => {
    return ( (deg >= 348 && deg <=360) || (deg >=0 && deg <= 11) ) ? "North" : (deg > 11 && deg <=33) ? "NNE"
        : (deg > 33 &&  deg<=56 ) ? "NE " : (deg > 56 && deg <= 78) ? "ENE" : (deg > 78 && deg <= 101) ? "East"
            : (deg > 101 && deg <= 123) ? "ESE" : (deg > 123 && deg <= 146) ? "SE" : (deg > 146 && deg <= 168) ? "ENE"
                : (deg > 168 && deg <= 191) ? "South" : (deg > 191 && deg <= 213) ? "SSW"
                    : (deg > 213 && deg <= 236) ? "WSW" : (deg > 236 && deg <= 258) ? "WSW"
                        : (deg > 258 && deg <= 281) ? "West" : (deg > 281 && deg <= 303) ? "WNW"
                            : (deg > 303 && deg <= 326) ? "NW" : (deg > 326 && deg <= 348) ? "NNW" : "none"

};
function CurrentWeather(props) {
    return (
        <div className="Current">
            <div className="weather-props">
                <h2 className="weather-title">Current weather</h2>
                <div className="weather-info">
                    <h2 className="weather-info-location_title">{props.location.city}
                        <span className="Current-info-city"> {props.location.countryOfCity}</span>
                    </h2>
                    <p className="weather-info-description">({props.weather.description})</p>
                </div>
            </div>
            <div className="weather">
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
export default CurrentWeather;
export {kelvinToCelsius, windDirection};