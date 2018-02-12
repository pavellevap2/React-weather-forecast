import React from "react";
import "./Sidebar.css"

function Sidebar(props) {
    return(
        <div className="Sidebar">
            <a className="Sidebar-title">MyForecast</a>
            <p className="Sidebar-text">Select format</p>
            <input type="text" className="Sidebar-input" placeholder="Enter city"
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