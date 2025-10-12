const TodoList = ({ todos }) => {
  if (!todos || !Array.isArray(todos)) return <p>No tasks found.</p>;

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo.text}</li>
      ))}
    </ul>
  );
};

export default TodoList;