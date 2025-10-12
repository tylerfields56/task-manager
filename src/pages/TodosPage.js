import React, { useState } from 'react';
import TodoList from '../components/TodoList';
import AddTaskForm from '../components/AddTaskForm';

const TodosPage = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = { text, completed: false };
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <h1>My Tasks</h1>
      <AddTaskForm onAdd={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
};

export default TodosPage;