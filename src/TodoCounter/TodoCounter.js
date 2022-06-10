import React from 'react'

function TodoCounter(props){
    const max = props.list.length;
    const active = props.list.filter(i=>i.completed === true)
    return(
        <div>
            <h2 className='title'>Your tasks</h2>
            <h3 className='subTitle'>{"Completed " + active.length +  " to " +  max}</h3>
        </div>
    )
}

export {TodoCounter} 