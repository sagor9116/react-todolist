import React, { useState } from 'react';

const TodoForm = ({addTodo}) => {
    const [inputText, setInputText] = useState('');
    const handleInputTextChange = (e) => {
        setInputText(e.target.value)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (inputText === '') return
        addTodo(inputText);
        setInputText('')
    }
    return (
        <form onSubmit = {handleFormSubmit}>
           <input type="text" onChange = {handleInputTextChange} value = {inputText} /> 
           <button type="submit" className="btn">Add</button>
        </form>
    )
}

export default TodoForm;
