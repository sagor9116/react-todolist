import { useState } from 'react';
import './App.css';
import uuid from 'react-uuid';
import TodoItem from './components/TodoItem';
import TodoForm from './components/TodoForm';


function App() {
  const [todos,setTodos] = useState([
    {
      id: uuid,
      title : '',
      completed : false
    }
  ]);

  const addTodo = (title) => {
    const newTodo = [...todos, {title}]
    setTodos(newTodo);
  }
  
  return (
    <div className="todo-container">
      <h1>My Todo List</h1>
      <div className="todo-form">
        <TodoForm addTodo = {addTodo} />
      </div>
      
      {/* {todos.map((todo)=> {
        return <TodoItem key = {todo.id} title = {todo.title} completed = {todo.completed} />
      })} */}

      {todos.map(({id,title,completed})=> {
        return <TodoItem key = {id} title = {title} completed = {completed} />
      })}


      
      
    </div>
  );
}

export default App;
