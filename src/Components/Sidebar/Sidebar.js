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
            value: this.state.address,
            onChange: this.onChange,
        }
        return (
            {/*<input type="text" className="Sidebar-input" placeholder="Enter city" id="autocomplete"*/},
                   {/*onChange={this.props.onChange}*/},
                   {/*value={this.props.inputValue }*/},
                   {/*ref={(input) => {this.textInput = input}}*/},
            {/*/>*/},

            <PlacesAutocomplete
                ref={(input) => {this.textInput = input}}
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
            <Input
                onChange={props.onChange}
                value={props.inputValue}/>
            <select className="Sidebar-select" value={props.currentFormat}>
                <option value="Select format">....</option>
                {props.makeSelect}
            </select>
            <button className="Sidebar-search_btn" onClick={props.onClick}>Search</button>
        </div>
    )
}
export default Sidebar;