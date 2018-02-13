import React from "react";
import "./Weather.css";
import cloud from "../../assets/images/cloud.png";
import wind from "../../assets/images/wind.png";
import CurrentWeather from "../../Components/CurrentWeather/CurrentWeather";
import Sidebar from "../../Components/Sidebar/Sidebar";
import ThreeDays from "../ThreeDays/ThreeDays"

const API_URL = "http://api.openweathermap.org/data/2.5/forecast";
const APP_ID = "a005082060a510ea98358cf7771f530f";
let forecastFormat = ["Current day", "3 days", "Week"];

let getDayData = (data) => ({
    temperature : data.main.temp,
    maxTemperature: data.main.temp_max,
    minTemperature : data.main.temp_min,
    weatherIcon : "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png",
    windSpeed : data.wind.speed,
    windDeg : data.wind.deg,
    description : data.weather[0].description,
    pressure : data.main.pressure,
    humidity : data.main.humidity,
    seaLevel : data.main.sea_level,
    clouds : data.clouds.all,
    date : data.dt_txt.substring(0,10),
});

let map = (mapFn, xs) =>{
    let zs = [];
    for (let x of xs){
        zs.push(mapFn(x));
    }
    return zs;
};

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
            isSearched : false,
            location : {
                city : "" ,
                countryOfCity:"",
            },

            days : [
                { temperature : "", maxTemperature : " ", minTemperature : "", weatherIcon : "", windSpeed:"",
                    windDeg:"", description:"", pressure: "" , humidity: "" , seaLevel: "" , clouds: "", date : ""} ,
                { temperature : "", maxTemperature : " ", minTemperature : "", weatherIcon : "", windSpeed:"",
                    windDeg:"", description:"", pressure: "" , humidity: "" , seaLevel: "" , clouds: "", date : ""} ,
                { temperature : "", maxTemperature : " ", minTemperature : "", weatherIcon : "", windSpeed:"",
                    windDeg:"", description:"", pressure: "" , humidity: "" , seaLevel: "" , clouds: "", date : ""} ,
                { temperature : "", maxTemperature : " ", minTemperature : "", weatherIcon : "", windSpeed:"",
                    windDeg:"", description:"", pressure: "" , humidity: "" , seaLevel: "" , clouds: "", date : ""} ,
                { temperature : "", maxTemperature : " ", minTemperature : "", weatherIcon : "", windSpeed:"",
                    windDeg:"", description:"", pressure: "" , humidity: "" , seaLevel: "" , clouds: "", date : ""} ,
                { temperature : "", maxTemperature : " ", minTemperature : "", weatherIcon : "", windSpeed:"",
                    windDeg:"", description:"", pressure: "" , humidity: "" , seaLevel: "" , clouds: "", date : ""} ,
                { temperature : "", maxTemperature : " ", minTemperature : "", weatherIcon : "", windSpeed:"",
                    windDeg:"", description:"", pressure: "" , humidity: "" , seaLevel: "" , clouds: "", date : ""} ,
            ]
        };
    }

    getWeather(){
        let url = API_URL + "?q=" + this.state.inputValue + "&APPID=" + APP_ID + "&cnt=7";

        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                let allDays = data.list.slice(0, 7);

                this.setState({
                    isSearched : true,
                    location : {
                        city: data.city.name,
                        countryOfCity: data.city.country,
                    },
                    data : map()
                });
            })
            .catch( (error) => {
                console.log("Request failed", error)
            });
    };

    render() {
        return(
            <div className="Weather">
                <Sidebar
                onChange={(e) => this.setState({inputValue : e.target.value})}
                inputValue={this.state.inputValue}
                currentFormat = {this.state.currentFormat}
                makeSelect = {forecastFormat.map((c, i) =>
                    <option key={i} onClick={() => this.setState({currentFormat : c})}>
                        {c}
                    </option>
                )}
                onClick={() => this.getWeather()}/>
                <main>{
                    (this.state.currentFormat == "Current day" && this.state.isSearched)
                    ? <CurrentWeather
                        weather = {this.state.days[0]}
                        location = {this.state.location}
                        imgWind={wind}
                        imgCloud={cloud}/>
                    : (this.state.currentFormat == "3 days" && this.state.isSearched)
                        ? <ThreeDays
                            location = {this.state.location}
                            firstDay = {this.state.days[0]}
                            secondDay = {this.state.days[1]}
                            thirdDay = {this.state.days[2]}
                          />
                        : <EmptyPage/>
                }
                </main>
            </div>
        )
    }
}
export default Weather;
