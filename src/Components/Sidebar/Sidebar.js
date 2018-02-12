import React from "react";

function Sidebar(props) {
    return(
        <div className="Sidebar">
            <a className="header-title">UnterMeteo</a>
            <input type="text" className="input-search"
                   placeholder={"Search"}
                   onChange={props.onChange}
                   value={props.inputValue}/>
            <span>Select format</span>
            <select value={props.currentFormat}>
                <option value="Select format">....</option>
                {props.makeSelect}
            </select>
            <button className="search-btn" onClick={props.onClick}>CLick</button>
        </div>
    )
}
export default Sidebar;