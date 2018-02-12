import React from 'react';
import "./Weather.css";
import cloud from "../../assets/images/cloud.png";
import wind from "../../assets/images/wind.png"

let kelvinToCelsius = (temp) => {
    return  parseInt(temp - 273.15);
};

let windDirection = (deg) => {
    return ((deg >= 348 && deg <=360) ||(deg >=0 && deg <= 11) ) ? "North" : (deg > 11 && deg <=33) ? "NNE"
            : (deg > 33 &&  deg<=56 ) ? "NE " : (deg > 56 && deg <= 78 ) ? "ENE" : (deg > 78 && deg <= 101 ) ? "East"
                : (deg > 101 && deg <= 123 ) ? "ESE" : (deg > 123 && deg <= 146 ) ? "SE" : (deg > 146 && deg <= 168 ) ? "ENE"
                    : (deg > 168 && deg <= 191 ) ? "South" : (deg > 191 && deg <= 213 ) ? "SSW" : (deg > 213 && deg <= 236 ) ? "WSW"
                        : (deg > 236 && deg <= 258 ) ? "WSW" : (deg > 258 && deg <= 281 ) ? "West" : (deg > 281 && deg <= 303 ) ? "WNW"
                            : (deg > 303 && deg <= 326 ) ? "NW" : (deg > 326 && deg <= 348 ) ? "NNW" : "none"

};

let weatherFormat = ["Current" , "5 days" , "16 days"];

class Weather extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            inputValue : "",
            toCurr : "",
            location : "" ,
            country:"",
            temp : "",
            tempMax:"",
            tempMin:"",
            pressure : "",
            humidity : "",
            wind : "",
            windDeg : "",
            icon : "",
            description : "",
            visibility : "",
            clouds : "",
        };
    }

    getWeather(){
        let curr = this.state.toCurr;
        let quantity = (curr == "Current") ? 1 : (curr == "5 days") ? 5 : 16;
        let main = "http://api.openweathermap.org/data/2.5/forecast?q=";
        let key =   "&appid=a005082060a510ea98358cf7771f530f&cnt=";
        let url = main + this.state.inputValue + key + quantity;

        fetch(url , {method : "GET"})
            .then( (response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({
                    location : data.name,
                    country : data.city.coord.country,
                    description : data.list[0].weather[0].description,
                    temp : data.list[0].main.temp,
                    tempMax : data.list[0].main.temp_max,
                    tempMin : data.list[0].main.temp_min,
                    pressure : data.list[0].main.pressure,
                    humidity : data.list[0].main.humidity,
                    wind : data.list[0].wind.speed,
                    windDeg : data.list[0].wind.deg,
                    visibility : data.list[0].visibility,
                    clouds :data.list[0].clouds.all,
                    icon : "http://openweathermap.org/img/w/" + data.list[0].weather[0].icon + ".png",
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

                    <select value="">
                        <option>Select:</option>
                        {weatherFormat.map((c,i) =>
                            <option key={i} onClick={() => this.setState({toCurr : c})}>{c}</option>
                        )}
                    </select>

                    <button className="search-btn" onClick={() => this.getWeather()}>CLick</button>
                </div>

                <main>
                   <div className="Current">
                       <h1 className="Current-title">Current weather</h1>
                           <div className="info">
                               <h2 className="country-title">{this.state.location} <span>{this.state.country}</span></h2>
                               <p className="weather-decription">{this.state.description}</p>
                           </div>

                       <div className="container-weather">
                           <div className="temp">
                               <p className="temp-title">Temperature</p>
                               <ul>
                                   <li className="temp-item"><img src={this.state.icon} alt="weather icon"/></li>
                                   <li className="temp-item">Temperature : {kelvinToCelsius(this.state.temp)}  °</li>
                                   <li className="temp-item">Max temperature :{kelvinToCelsius(this.state.tempMax)} °
                                   </li>
                                   <li className="temp-item">Min temperature : {kelvinToCelsius(this.state.tempMin)} °
                                   </li>
                                   <li className="temp-item"> Atmosphere pressure :{this.state.pressure} mm. gt. art.</li>
                                   <li className="temp-item">Humidity : {this.state.humidity}</li>
                               </ul>
                           </div>
                           <div className="wind">
                              <p className="temp-title">Wind</p>
                               <ul>
                                   <li className="temp-item"><img src={wind} alt="wind"/></li>
                                   <li className="wind-item">Wind speed : {this.state.wind} mps</li>
                                   <li className="wind-item">Wind direction : {windDirection(this.state.windDeg)}</li>
                               </ul>
                           </div>
                           <div className="visiblity">
                               <p className="temp-title">Visibility</p>
                               <ul>
                                   <li className="temp-item"><img src={cloud} alt="cloud"/></li>
                                   <li className="visibility-item">Visibility : {this.state.visibility} MOR</li>
                                   <li className="visibility-item">Clouds : {this.state.clouds} %</li>
                               </ul>
                           </div>
                       </div>

                   </div>
               </main>
            </div>

        )
    }
}
export default Weather;
