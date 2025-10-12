import React from 'react';
import './TodoItem.css';

function TodoItem({ task, onDelete, onToggleComplete }) {
  if (!task) return null;

  const { id, text, dueDate, completed } = task;

  return (
    <div className={`todo-item ${completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => onToggleComplete(id)}
      />
      <span className="todo-text">{text}</span>
      <span className="todo-date">{dueDate}</span>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}

export default TodoItem;