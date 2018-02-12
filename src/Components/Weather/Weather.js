import React from "react";
import "./Weather.css";
import cloud from "../../assets/images/cloud.png";
import wind from "../../assets/images/wind.png";
import CurrentWeather from "../../Components/CurrentWeather/CurrentWeather"

let kelvinToCelsius = (temp) => {
    return  parseInt(temp - 273.15);
};

let windDirection = (deg) => {
    return ( (deg >= 348 && deg <=360) ||(deg >=0 && deg <= 11) ) ? "North" : (deg > 11 && deg <=33) ? "NNE"
            : (deg > 33 &&  deg<=56 ) ? "NE " : (deg > 56 && deg <= 78) ? "ENE" : (deg > 78 && deg <= 101) ? "East"
            : (deg > 101 && deg <= 123) ? "ESE" : (deg > 123 && deg <= 146) ? "SE" : (deg > 146 && deg <= 168) ? "ENE"
                : (deg > 168 && deg <= 191) ? "South" : (deg > 191 && deg <= 213) ? "SSW"
                    : (deg > 213 && deg <= 236) ? "WSW" : (deg > 236 && deg <= 258) ? "WSW"
                        : (deg > 258 && deg <= 281) ? "West" : (deg > 281 && deg <= 303) ? "WNW"
                            : (deg > 303 && deg <= 326) ? "NW" : (deg > 326 && deg <= 348) ? "NNW" : "none"

};

let weatherFormat = ["Current day", "5 days", "16 days"];
const API_URL = "http://api.openweathermap.org/data/2.5/forecast";
const APP_ID =  "a005082060a510ea98358cf7771f530f";

class Weather extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            inputValue : "",
            currentFormat : "",
            location : "" ,
            countryOfCity:"",
            temperature : "",
            maxTemperature:"",
            minTemperature:"",
            pressure : "",
            humidity : "",
            windSpeed : "",
            windDeg : "",
            weatherIcon : "",
            description : "",
            visibility : "",
            clouds : "",
        };
    }

    getWeather(){
        let currFormat = this.state.currentFormat;
        let quantity = (currFormat == "Current day") ? 1 : (currFormat == "5 days") ? 5 : 16;

        let url = API_URL + "?q=" + this.state.inputValue + "&appid=" + APP_ID + "&cnt=" + quantity;
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                let day = data.list[0];

                this.setState({
                    location : data.name,
                    countryOfCity : data.city.coord.countryOfCity,
                    description : day.weather[0].description,
                    temperature : day.main.temp,
                    maxTemperature : day.main.temp_max,
                    minTemperature : day.main.temp_min,
                    pressure : day.main.pressure,
                    humidity : day.main.humidity,
                    wind : day.wind.speed,
                    windDeg : day.wind.deg,
                    visibility : day.visibility,
                    clouds: day.clouds.all,
                    weatherIcon : "http://openweathermap.org/img/w/" + day.weather[0].icon + ".png",
                })
            })
            .catch( (error) => {
                console.log("Request failed", error)
            });
    };

    render(){

        return(
            <div className="Weather">
                <div className="Sidebar">
                    <a className="header-title">UnterMeteo</a>
                    <input type="text" className="input-search"
                           placeholder={"Search"}
                           onChange={(e) => this.setState({inputValue : e.target.value})}
                           value={this.state.inputValue}/>
                    <span>Select format</span>
                    <select value={this.state.currentFormat}>
                        <option value="Select format">....</option>
                        {weatherFormat.map((c,i) =>
                            <option  key={i} onClick={() => this.setState({currentFormat : c})}>{c}</option>
                        )}
                    </select>
                    <button className="search-btn" onClick={() => this.getWeather()}>CLick</button>
                </div>
                <main>
                    <CurrentWeather
                        location = {this.state.location}
                        country = {this.state.countryOfCity}
                        decription = {this.state.description}
                        weatherIcon = {this.state.weatherIcon}
                        temperature = {kelvinToCelsius(this.state.temperature)}
                        maxTemperature = {kelvinToCelsius(this.state.maxTemperature)}
                        minTemperature = {kelvinToCelsius(this.state.minTemperature)}
                        pressure = {this.state.pressure}
                        humidity = {this.state.humidity}
                        windSpeed = {this.state.windSpeed}
                        windDeg = {windDirection(this.state.windDeg)}
                        visibility = {this.state.visibility}
                        clouds = {this.state.clouds}
                        imgWind = {wind}
                        imgCloud = {cloud}/>
                </main>
            </div>
        )
    }
}
export default Weather;
