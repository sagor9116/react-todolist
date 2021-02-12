import React from 'react';

const TodoItem = ({title,completed}) => {
    return (
        <div className="task"
            style = {{textDecoration : completed ? 'line-through' : ''}}
        >
        <div>
           <p>{title}</p>
        </div>
            
        </div>
    )
}

export default TodoItem;
