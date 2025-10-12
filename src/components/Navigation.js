import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#f4f4f4' }}>
      <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
      <Link to="/todos" style={{ marginRight: '10px' }}>Todos</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navigation;