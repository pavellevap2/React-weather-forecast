import React from "react";

function Header(props) {
    return(
        <div>
            <form action="">
                <input value={props.value} onChange={props.onChange} type="text"/>
                <button onClick={props.onClick}>Get</button>
            </form>
        </div>
    )
}
export default Header;