import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  return (
    <div>
      <NavBar />
      <h1>Task Manager</h1>
      <nav>
        <Link to="/todos">Todos</Link> | <Link to="/contact">Contact</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

export default App;