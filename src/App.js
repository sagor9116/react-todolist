import { useState } from 'react';
import './App.css';
import uuid from 'react-uuid';
import TodoItem from './components/TodoItem';
import TodoForm from './components/TodoForm';


function App() {
  const [todos,setTodos] = useState([
    {
      id: uuid,
      title : 'Wake up at 6.00 a.m',
      completed : false
    },
    {
      id: uuid,
      title : 'Try to code',
      completed : false
    },
    {
      id: uuid,
      title : 'Make use of the day',
      completed : true
    }
  ]);

  const addTodo = (title) => {
    const newTodo = [...todos, {title, completed : false}]
    setTodos(newTodo);
  }
  
  return (
    <div className="todo-container">
      <h1>My Todo List</h1>
      <div className="todo-form">
        <TodoForm addTodo = {addTodo} />
      </div>
      
      {todos.map((todo)=> {
        return <TodoItem key = {todo.id} title = {todo.title} completed = {todo.completed} />
      })}
      
      
    </div>
  );
}

export default App;
