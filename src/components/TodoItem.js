import React from 'react';
import './TodoItem.css';

function TodoItem({ todo, index, onToggleComplete, onDelete }) {
  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <span onClick={() => onToggleComplete(index)}>
        {todo.text}
      </span>
      <button onClick={() => onDelete(index)}>Delete</button>
    </div>
  );
}

export default TodoItem;