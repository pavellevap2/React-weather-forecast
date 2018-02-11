import React from 'react';
import "./Weather.css";
import search from '../../assets/images/search.png'
class Weather extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            city : "" ,
            temperature : "",
            wind : "",
            inputValue : "",
            place: "",
            icon : ""
        }
    }

    getWeather(){
        let main = "http://api.openweathermap.org/data/2.5/weather?q=";
        let key =   "&appid=a005082060a510ea98358cf7771f530f";
        let url = main + this.state.city + key;
        fetch( url , {method : "GET"})
            .then((response)=> {
                return response.json();
            })
            .then((data)=> {
                this.setState({
                    temperature : data.main["temp"],
                    wind : data.wind["speed"],
                    place : data.name,
                    icon : "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png"
                })
            })
            .catch((error)=> {
                console.log('Request failed', error)
            });

    }

    render(){

        return(
            <div>

                <header>
                    <a className="header-title">UnterMeteo</a>
                    <ul className="header-nav">
                        <li className="header-nav-item"><a href="">today</a></li>
                        <li className="header-nav-item"><a href="">5 days</a></li>
                        <li className="header-nav-item"><a href="">16 days</a></li>
                    </ul>
                    <form action="" className="search-form">
                        <input type="text" className="input-search"
                               placeholder={"Search"}
                               onChange={(e) => this.setState({city : e.target.value})}
                               value={this.state.city}/>
                    </form>
                    <button className="search-btn" onClick={() => this.getWeather()}>
                        <img src={search} alt="search button"/>
                    </button>
                </header>

                <p>{this.state.city}</p>
                <p>{this.state.temperature}</p>
                <p>{this.state.wind}</p>
                <p>{this.state.place}</p>
                <img className='test' src={this.state.icon} />
            </div>
        )
    }
}
export default Weather;
