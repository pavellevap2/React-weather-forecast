import React from "react";
import "./Weather.css";
import cloud from "../../assets/images/cloud.png";
import wind from "../../assets/images/wind.png";
import CurrentWeather from "../../Components/CurrentWeather/CurrentWeather";
import Sidebar from "../../Components/Sidebar/Sidebar";

let weatherFormat = ["Current day", "5 days", "16 days"];
const API_URL = "http://api.openweathermap.org/data/2.5/forecast";
const APP_ID =  "a005082060a510ea98358cf7771f530f";

function EmptyPage() {
    return(
        <div>
            <h2 className="Empty-title">Choose forecast format</h2>
        </div>
    )
}

class Weather extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            inputValue : "",
            currentFormat : "",
            city : "" ,
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
            seaLevel : "",
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
                    city : data.city.name,
                    countryOfCity : data.city.country,
                    description : day.weather[0].description,
                    temperature : day.main.temp,
                    maxTemperature : day.main.temp_max,
                    minTemperature : day.main.temp_min,
                    pressure : day.main.pressure,
                    seaLevel : day.main.sea_level,
                    humidity : day.main.humidity,
                    windSpeed : day.wind.speed,
                    windDeg : day.wind.deg,
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
                <Sidebar
                onChange={(e) => this.setState({inputValue : e.target.value})}
                inputValue={this.state.inputValue}
                currentFormat = {this.state.currentFormat}
                makeSelect = {weatherFormat.map((c, i) =>
                    <option key={i} onClick={() => this.setState({currentFormat : c})}>
                        {c}
                    </option>
                )}
                onClick={() => this.getWeather()}/>
                <main>{this.state.currentFormat=="Current day" ?
                    <CurrentWeather
                        weather={this.state}
                        imgWind={wind}
                        imgCloud={cloud}/> :
                    <EmptyPage/>
                }
                </main>
            </div>
        )
    }
}
export default Weather;
