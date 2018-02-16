import React from "react";
import "./Sidebar.css";
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from "react-places-autocomplete";

class Input extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            adress : "",
        };
        this.onChange = (address) => this.setState({ address });
    }

    componentDidMount(){
        const autocomplete = new window.google.maps.places.Autocomplete(
            (this.textInput),
            {types: ["(cities)"]});
    }
    shouldComponentUpdate() {
        return false;
    }

    render(){
        const inputProps = {
            value: this.state.address ,
            onChange: this.onChange,
            ref : (input) => {this.textInput = input}
        };
        return (
            <PlacesAutocomplete onSelect={this.props.onSelect}
                inputProps={inputProps}
            />
        )
    }
}

function Sidebar(props) {
    return(
        <div className="Sidebar">
            <a className="Sidebar-title">MyForecast</a>
            <p className="Sidebar-text">Select format</p>
            <Input className={"test"}/>
            <select className="Sidebar-select" value={props.currentFormat}>
                <option value="Select format">....</option>
                {props.makeSelect}
            </select>
            <button className="Sidebar-search_btn" onClick={props.onClick}>Search</button>
        </div>
    )
}
export default Sidebar;