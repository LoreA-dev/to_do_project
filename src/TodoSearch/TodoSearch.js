import React from 'react';

function TodoSearch (props){
    return (
        <div className='containerSearch'>
            <input className='inputSearch' onChange={props.onChangeText} placeholder="Search.."></input>
            <i className="fas fa-search"></i>
        </div>
    )
}

export {TodoSearch}