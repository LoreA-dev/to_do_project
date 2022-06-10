import React from 'react';
import ReactDOM from 'react-dom';

function AddNewItem({children}){
    return ReactDOM.createPortal(
        children,
        document.getElementById("addNewItem")
    );
}

export {AddNewItem};