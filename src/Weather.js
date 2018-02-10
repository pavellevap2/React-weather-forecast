import React, { Component } from 'react';

let getWeater = () => {
    fetch("https://api.darksky.net/forecast/0123456789abcdef9876543210fedcba/42.3601,-71.0589",{
        method : "GET",
        mode : "cors"
    })
        .then(function(response) {
            return response.text();
        })
        .then(function(text) {
            console.log('Request successful', text);
        })
        .catch(function(error) {
            console.log('Request failed', error)
        });

}

class Weather extends React.Component {
    render(){
        return(
            <div>
                <button onClick={() => getWeater()}>click</button>
            </div>
        )
    }
}
export default Weather;