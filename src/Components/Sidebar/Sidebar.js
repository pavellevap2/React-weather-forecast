import React from "react";

function Sidebar(props) {
    return(
        <div>
            <a className="header-title">UnterMeteo</a>
            <input type="text" className="input-search"
                   placeholder={"Search"}
                   onChange={props.onChange}
                   onClick={props.onClick} />
            <option value="">
                <select>{props.select}</select>
            </option>
            <button className="search-btn" onClick={props.onClick}>
            </button>

        </div>
    )
}
export default Sidebar;