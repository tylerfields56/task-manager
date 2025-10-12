import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onToggleComplete, onDelete }) => {
  return (
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {tasks.length === 0 ? (
        <li style={{ textAlign: 'center', padding: '20px', color: '#888' }}>
          No tasks yet. Add one!
        </li>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggleComplete={onToggleComplete}
            onDelete={onDelete}
          />
        ))
      )}
    </ul>
  );
};

export default TaskList;