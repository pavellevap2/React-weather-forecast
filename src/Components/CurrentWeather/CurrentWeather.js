import React from "react"

function CurrentWeather(props) {
    return (
        <div className="Current">
            <h1 className="Current-title">Current weather</h1>
            <div className="info">
                <h2 className="country-title">{props.location} <span>{props.countryOfCity}</span></h2>
                <p className="weather-decription">{props.description}</p>
            </div>

            <div className="container-weather">
                <div className="temp">
                    <p className="temp-title">Temperature</p>
                    <ul>
                        <li className="temp-item"><img src={props.weatherIcon} alt="weather icon"/></li>
                        <li className="temp-item">Temperature : {props.temperature}  °</li>
                        <li className="temp-item">Max temperature :{props.maxTemperature} °
                        </li>
                        <li className="temp-item">Min temperature : {props.minTemperature} °
                        </li>
                        <li className="temp-item"> Atmosphere pressure :{props.pressure} mm. gt. art.</li>
                        <li className="temp-item">Humidity : {props.humidity}</li>
                    </ul>
                </div>
                <div className="wind">
                    <p className="temp-title">Wind</p>
                    <ul>
                        <li className="temp-item"><img src={props.imgWind} alt="wind"/></li>
                        <li className="wind-item">Wind speed : {props.windSpeed} mps</li>
                        <li className="wind-item">Wind direction : {props.windDeg}</li>
                    </ul>
                </div>
                <div className="visiblity">
                    <p className="temp-title">Visibility</p>
                    <ul>
                        <li className="temp-item"><img src={props.imgCloud} alt="cloud"/></li>
                        <li className="visibility-item">Visibility : {props.visibility} MOR</li>
                        <li className="visibility-item">Clouds : {props.clouds} %</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default CurrentWeather;