import React, { useState } from 'react';
import './TodoForm.css';

function TodoForm({ addTodo }) {
  const [task, setTask] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;

    addTodo({ task, dueDate });
    setTask('');
    setDueDate('');
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a new task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="task-input"
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="date-input"
      />
      <button type="submit" className="add-button">Add Task</button>
    </form>
  );
}

export default TodoForm;