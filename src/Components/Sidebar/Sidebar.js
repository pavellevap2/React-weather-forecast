import React from "react";
import "./Sidebar.css";

let initAutocomplete = () => {
    const autocomplete = new window.google.maps.places.Autocomplete(
        (document.getElementById("autocomplete")),
        {types: ["(cities)"]});
};

class Input extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        initAutocomplete()
    }
    shouldComponentUpdate() {
        return false;
    }

    render(){
        return (
            <input type="text" className="Sidebar-input" placeholder="Enter city" id="autocomplete"
                   onChange={this.props.onChange}
                   onFocus={this.props.onFocus}
                   value={this.props.inputValue}/>
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
                onFocus={props.onFocus}
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