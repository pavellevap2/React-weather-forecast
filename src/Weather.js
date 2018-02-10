import React, { Component } from 'react';

let getWeater = () => {
    fetch("https://api.darksky.net/forecast/adb7b56c5cf973ce38ac44e615433989/37.8267,-122.4233")
        .then(
            function(response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    return;
                }

                response.json().then(function(data) {
                    console.log(data);
                });
            }
        )
        .catch(function(err) {
            console.log('Fetch Error :-S', err);
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