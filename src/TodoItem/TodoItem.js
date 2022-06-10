import React from "react";

function TodoItem (props){
    return(
        <>
        <li className="listItem">
            <input className="checkbox" defaultChecked={props.completed} onClick={props.onComplete} type="checkbox" id={"myCheckbox"+props.index} />
            <label className="propsItem" htmlFor={"myCheckbox"+props.index}>{props.text}</label>
            <button id="deleteItemButton" onClick={props.onDelete} ><i className="fas fa-times"></i></button>
        </li>
        </>
    )
}

export default TodoItem;