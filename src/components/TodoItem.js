import React from 'react';
import './TodoItem.css';

function TodoItem({ task, onDelete, onToggleComplete }) {
  return (
    <div className={`todo-item ${task.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggleComplete(task.id)}
      />
      <span className="task-text">{task.text}</span>
      <span className="due-date">Due: {task.dueDate}</span>
      <button className="delete-button" onClick={() => onDelete(task.id)}>
        🗑️
      </button>
    </div>
  );
}

export default TodoItem;