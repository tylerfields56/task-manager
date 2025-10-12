import React from 'react';

const TaskItem = ({ task, onToggleComplete, onDelete }) => {
  return (
    <li
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
        borderBottom: '1px solid #ccc',
        textDecoration: task.completed ? 'line-through' : 'none',
        backgroundColor: task.completed ? '#e6ffe6' : '#fff',
      }}
    >
      <span>{task.text}</span>
      <div>
        <button
          onClick={() => onToggleComplete(task.id)}
          style={{ marginRight: '10px' }}
        >
          {task.completed ? 'Undo' : 'Complete'}
        </button>
        <button onClick={() => onDelete(task.id)} style={{ color: 'red' }}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default TaskItem;