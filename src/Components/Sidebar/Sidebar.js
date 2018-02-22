import React from "react";
import "./Sidebar.css";

class InputGooglePlaces extends React.Component {
    componentDidMount(){
        const autocomplete = new window.google.maps.places.Autocomplete(
            this.textInput,
            {types: ["(cities)"]});
        autocomplete.addListener("place_changed", ()=> {
            let place = autocomplete.getPlace() ;
            this.props.onChange(place.address_components[0].long_name)
        });
    }
    shouldComponentUpdate() {
        return false;
    }

    render(){
        return (
            <input type="text" className="Sidebar-input" placeholder="Enter city" id="autocomplete"
                   onChange={(e) => this.props.onChange(e.target.value)}
                   value={this.props.inputValue }
                   ref={(input) => {this.textInput = input}}/>
        )
    }
}

function Sidebar(props) {
    return(
        <div className="Sidebar">
            <a className="Sidebar-title">MyForecast</a>
            <p className="Sidebar-text">Select format</p>
            <InputGooglePlaces
            value ={props.inputValue}
            onChange={props.onChange}      />
            <select className="Sidebar-select" value={props.currentFormat}>
                <option value="Select format">....</option>
                {props.makeSelect}
            </select>
            <button className="Sidebar-search_btn" onClick={props.onClick}>Search</button>
        </div>
    )
}
export default Sidebar;