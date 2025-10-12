import React, { useState } from 'react';

function AddTaskForm({ onAdd }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === '') return;

    const newTask = {
      id: Date.now(),
      text: text.trim(),
      dueDate: new Date().toLocaleDateString(), // you can improve this later
      completed: false,
    };

    onAdd(newTask);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a task"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTaskForm;