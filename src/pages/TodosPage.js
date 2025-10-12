import React from 'react';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';

function TodosPage() {
  return (
    <div>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default TodosPage;