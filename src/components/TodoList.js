import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

function TodoList({ tasks, onDelete, onToggleComplete, onEdit }) {
  return (
    <div className="todo-list">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggleComplete={onToggleComplete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}

export default TodoList;