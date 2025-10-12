import React from 'react';
import './TodoItem.css';

function TodoItem({ task, onToggle, onDelete }) {
  if (!task) return null; // Prevent crash if task is undefined

  return (
    <li className={task.completed ? 'completed' : ''}>
      <span>{task.text}</span>
      <span>Due: {task.dueDate}</span>
      <button onClick={onToggle}>
        {task.completed ? 'Undo' : 'Complete'}
      </button>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
}

export default TodoItem;