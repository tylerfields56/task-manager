import React, { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === '') return;
    onAddTask(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Enter a new task"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ padding: '8px', width: '70%', marginRight: '10px' }}
      />
      <button type="submit" style={{ padding: '8px 16px' }}>
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;