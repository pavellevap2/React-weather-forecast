import React from "react";
import "./Sidebar.css";


function Sidebar(props) {
    return(
        <div className="Sidebar">
            <a className="Sidebar-title">MyForecast</a>
            <p className="Sidebar-text">Select format</p>
            <select className="Sidebar-select" value={props.currentFormat}>
                <option value="Select format">....</option>
                {props.makeSelect}
            </select>
            <input type="text" className="Sidebar-input" placeholder="Enter city" id="autocomplete"
                   onChange={props.onChange}
                   onFocus={props.onFocus}
                   value={props.inputValue}/>
            <button className="Sidebar-search_btn" onClick={props.onClick}>Search</button>
        </div>
    )
}
export default Sidebar;