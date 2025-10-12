import React from 'react';

const TaskItem = ({ task, onToggle, onDelete }) => {
  return (
    <li
      style={{
        textDecoration: task.completed ? 'line-through' : 'none',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '8px 0',
        borderBottom: '1px solid #ccc'
      }}
    >
      <span onClick={() => onToggle(task.id)} style={{ cursor: 'pointer' }}>
        {task.text}
      </span>
      <button onClick={() => onDelete(task.id)} style={{ color: 'red' }}>
        Delete
      </button>
    </li>
  );
};

export default TaskItem;