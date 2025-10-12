import React from 'react';
import TodoItem from './TodoItem';

function TaskList({ tasks, setTasks }) {
  const toggleComplete = (id) => {
    const updated = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updated);
  };

  const deleteTask = (id) => {
    const updated = tasks.filter(task => task.id !== id);
    setTasks(updated);
  };

  return (
    <ul>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          onToggle={() => toggleComplete(task.id)}
          onDelete={() => deleteTask(task.id)}
        />
      ))}
    </ul>
  );
}

export default TaskList;