import React, { useState } from 'react';
import TodoList from '../components/TodoList';

const TodosPage = () => {
  const [todos, setTodos] = useState([]); // ✅ Initialize with empty array

  return (
    <div>
      <h1>My Tasks</h1>
      <TodoList todos={todos} /> {/* ✅ Pass todos as prop */}
    </div>
  );
};

export default TodosPage;