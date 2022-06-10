import React from 'react'

function NewTasksModal(props){
    if(!props.show){
        return null
    }
    return(
        <div className='newTaskModal'>
            <button onClick={props.onClose} id="closeModal" ><i className="fas fa-times"></i></button>
            <div className='modalContent'>
                <p>ADD NEW TASK</p> 
            </div>
        </div>
    )
}

export {NewTasksModal};