import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, onToggleComplete, onDelete }) {
  return (
    <div className="todo-list">
      {todos.length === 0 ? (
        <p>No tasks yet</p>
      ) : (
        todos.map((todo, index) => (
          <TodoItem
            key={index}
            index={index}
            todo={todo}
            onToggleComplete={onToggleComplete}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  );
}

export default TodoList;