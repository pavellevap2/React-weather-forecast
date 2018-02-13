import React from "react";
import "./Weather.css";
import cloud from "../../assets/images/cloud.png";
import wind from "../../assets/images/wind.png";
import CurrentWeather from "../../Components/CurrentWeather/CurrentWeather";
import Sidebar from "../../Components/Sidebar/Sidebar";
import ThreeDays from "../../Components/ThreeDays/Threedays"

let weatherFormat = ["Current day", "3 days", "Week"];

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

            day:{
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
            },

            threeDays : [
                {first : {temperature : "" ,maxTemperature : " " ,minTemperature : "", weatherIcon : "",windSpeed:"",
                        windDeg:"", description:"", }},
                {second :{temperature : "" ,maxTemperature : " " ,minTemperature : "", weatherIcon : "",windSpeed:"",
                        windDeg:"", description:"", }},
                {third :{temperature : "" ,maxTemperature : " " ,minTemperature : "", weatherIcon : "",windSpeed:"",
                        windDeg:"", description:"", }},
            ]
        };
    }

    getWeather(){
        let url = "http://api.openweathermap.org/data/2.5/forecast?q=London&APPID=a005082060a510ea98358cf7771f530f&cnt=7";

        fetch(url, {method : "GET"})
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                    let day = data.list[0];
                    let threeDays = data.list.slice(0, 3);

                this.setState({
                    location : {
                        city: data.city.name,
                        countryOfCity: data.city.country,
                    },
                    day :{
                        description: day.weather[0].description,
                        temperature: day.main.temp,
                        maxTemperature: day.main.temp_max,
                        minTemperature: day.main.temp_min,
                        pressure: day.main.pressure,
                        seaLevel: day.main.sea_level,
                        humidity: day.main.humidity,
                        windSpeed: day.wind.speed,
                        windDeg: day.wind.deg,
                        clouds: day.clouds.all,
                        weatherIcon: "http://openweathermap.org/img/w/" + day.weather[0].icon + ".png",
                    },
                    threeDays:[
                        {
                            first: {
                                temperature : threeDays[0].main.temp,
                                maxTemperature: threeDays[0].main.temp_max,
                                minTemperature : threeDays[0].main.temp_min,
                                weatherIcon : "http://openweathermap.org/img/w/" + threeDays[0].weather[0].icon + ".png",
                                windSpeed : threeDays[0].wind.speed,
                                windDeg : threeDays[0].wind.deg,
                                description : threeDays[0].weather[0].description,
                            },
                            second:{
                                temperature : threeDays[1].main.temp,
                                maxTemperature: threeDays[1].main.temp_max,
                                minTemperature : threeDays[1].main.temp_min,
                                weatherIcon : "http://openweathermap.org/img/w/" + threeDays[1].weather[0].icon + ".png",
                                windSpeed : threeDays[1].wind.speed,
                                windDeg : threeDays[1].wind.deg,
                                description : threeDays[1].weather[0].description,
                            },
                            third:{
                                temperature : threeDays[2].main.temp,
                                maxTemperature: threeDays[2].main.temp_max,
                                minTemperature : threeDays[2].main.temp_min,
                                weatherIcon : "http://openweathermap.org/img/w/" + threeDays[2].weather[0].icon + ".png",
                                windSpeed : threeDays[2].wind.speed,
                                windDeg : threeDays[2].wind.deg,
                                description : threeDays[2].weather[0].description,
                            }
                        }
                    ],

                    isSearched : true,
                    })
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
                makeSelect = {weatherFormat.map((c, i) =>
                    <option key={i} onClick={() => this.setState({currentFormat : c})}>
                        {c}
                    </option>
                )}
                onClick={() => this.getWeather()}/>

                <main>{(this.state.currentFormat == "Current day" && this.state.isSearched) ?
                    <CurrentWeather
                        weather = {this.state.day}
                        location = {this.state.location}
                        imgWind={wind}
                        imgCloud={cloud}/>
                    : (this.state.currentFormat == "3 days" && this.state.isSearched) ?
                        <ThreeDays/>
                        : <EmptyPage/>
                }
                </main>
            </div>
        )
    }
}
export default Weather;
