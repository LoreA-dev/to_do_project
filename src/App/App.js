import React from 'react'
import Axios from 'axios';
import './App.css';
import {TodoCounter} from '../TodoCounter/TodoCounter';
import {TodoSearch} from '../TodoSearch/TodoSearch';
import {TodoList} from '../TodoList/TodoList';
import {AddNewItem} from '../AddNewItem';

function getToDos(){
  return Axios.get("http://localhost:5000/toDo")
}

function App() {
  const [myList, setList] = React.useState([])
  const [newToDo, setNewToDo] = React.useState('');
 
  // const localStorageToDos = localStorage.getItem('TODOS_V1');
  
  // localStorage.setItem('TODOS_V1', JSON.stringify(toDos))
  // const saveToDo = (newToDos) => {
  //   const stringifiedToDos = JSON.stringify(newToDos);
  //   localStorage.setItem('TODOS_V1', stringifiedToDos );
  //   setList(newToDos);
  // }

  // if (!localStorageToDos){
  //   localStorage.setItem('TODOS_V1', JSON.stringify([]))  ;
  // }else{
  //   parsedToDo = JSON.parse(localStorageToDos)
  // }


 
  // const [show, setShow] = React.useState(false)

  const completeToDo = (text) => {
    const newtoDos = myList.map(toDo => {
      if(toDo.text === text){
        toDo.completed = !toDo.completed
      }
      return toDo;
    });
    
    setList(newtoDos)
  }

  const addToDo = (text) => {
    const newtoDos = [...myList];
    newtoDos.push({
      completed: false,
      text,
    });
    setList(newtoDos)
  }

  const targetValue = (event) =>{
    setNewToDo(event.target.value)
  }

  const deleteToDo = (text) => {
    const newtoDos = myList.filter(toDo => toDo.text !== text);
    setList(newtoDos)
  }

  const onFilterToDo = (evt)=>{
    const currentList = [...myList]
    const text = (evt.target.value || '').toLowerCase();
    let result = myList.filter(item=> {
      const lowertext = item.text.toLowerCase();
      return lowertext.indexOf(text) >= 0;
    })  
    result = text === '' ? currentList : result
    setList(result);
  }

  React.useEffect(()=> {
    getToDos().then((res)=>{
      console.log(res.data); 
      setList(res.data.result)
    })
  }, [])

  return (
    <div className='mainContainer'>
      <TodoCounter list={myList} />
      <TodoSearch onChangeText={onFilterToDo} />
      <div className='itemContainer'>
        <TodoList onCompleteTodo={completeToDo} onDeleteTodo={deleteToDo} list={myList} />
      </div>
      <AddNewItem>
        <div className='newTaskContainer'>
          <i class="fas fa-plus-circle"></i>
          <input value={newToDo} onChange={targetValue} type="text" placeholder='Feed the cats..' id="newTaskInput"></input>
          <button onClick={() => addToDo(newToDo)} id="newTaskButton">Add task</button>
        </div>
      </AddNewItem>
      {/* <NewTasksModal onClose={() => setShow(false)} show={show} />*/}
    </div>
  );
}

export default App;
