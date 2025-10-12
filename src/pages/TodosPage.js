import React, { useState } from 'react';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

function TodosPage() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todoText) => {
    setTodos([...todos, todoText]);
  };

  return (
    <div>
      <h2>My Todos</h2>
      <TodoForm onAddTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
}

export default TodosPage;