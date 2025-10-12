import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, onDelete }) {
  return (
    <div className="todo-list">
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} onDelete={() => onDelete(index)} />
      ))}
    </div>
  );
}

export default TodoList;