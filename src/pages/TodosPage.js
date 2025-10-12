import React, { useState, useEffect } from 'react';
import TodoList from '../components/TodoList';
import './TodosPage.css';

function TodosPage() {
  const [newTask, setNewTask] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [tasks, setTasks] = useState(() => {
    const stored = localStorage.getItem('tasks');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;

    const newTaskObj = {
      id: Date.now(),
      text: newTask,
      dueDate: dueDate || 'No date set',
      completed: false,
    };

    setTasks([...tasks, newTaskObj]);
    setNewTask('');
    setDueDate('');
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleToggleComplete = (id) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="todos-page">
      <h1>Task Manager</h1>
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="Enter a task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          required
        />
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>

      <TodoList
        todos={tasks}
        onDelete={handleDeleteTask}
        onToggleComplete={handleToggleComplete}
      />
    </div>
  );
}

export default TodosPage;