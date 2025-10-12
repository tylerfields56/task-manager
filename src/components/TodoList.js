import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos = [], onDelete, onToggleComplete }) {
  if (!Array.isArray(todos)) return null;

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          task={todo}
          onDelete={onDelete}
          onToggleComplete={onToggleComplete}
        />
      ))}
    </div>
  );
}

export default TodoList;