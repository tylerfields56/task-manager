import React from 'react';
import './TaskItem.css';

function TaskItem({ task, onToggle, onDelete }) {
  if (!task) return null; // Prevent undefined crashes

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

export default TaskItem;