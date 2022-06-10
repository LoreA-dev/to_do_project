import React from "react";
import TodoItem from '../TodoItem/TodoItem';
import './mycss.css'



function TodoList(props){
    const toDos = props.list
    const completeToDo = props.onCompleteTodo
    const deleteToDo = props.onDeleteTodo
    return(
        toDos.map((toDo, index) => (<TodoItem key={toDo.text} index={index+1} completed={toDo.completed} text={toDo.text} 
            onDelete={() => deleteToDo(toDo.text)} onComplete={() => completeToDo(toDo.text)} /> )  )
    )
}

export {TodoList}