import React from "react";
import "./Sidebar.css";

class Input extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            place : ""
        }

    }

    componentDidMount(){
        const autocomplete = new window.google.maps.places.Autocomplete(
            (this.textInput),
            {types: ["(cities)"]});
        autocomplete.addListener("place_changed", function() {
            let place = autocomplete.getPlace() ;
            () => this.setState({place :place.address_components[0].long_name })
        });
    }
    shouldComponentUpdate() {
        return false;
    }

    render(){
        return (
            <input type="text" className="Sidebar-input" placeholder="Enter city" id="autocomplete"
                onChange={this.props.onChange}
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
            <Input
            value ={props.inputValue}
            onChange = {props.onChange}
            />
            <select className="Sidebar-select" value={props.currentFormat}>
                <option value="Select format">....</option>
                {props.makeSelect}
            </select>
            <button className="Sidebar-search_btn" onClick={props.onClick}>Search</button>
        </div>
    )
}
export default Sidebar;