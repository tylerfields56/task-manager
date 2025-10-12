import React from 'react';

const Footer = () => {
  return (
    <footer style={{ marginTop: '50px', fontSize: '0.9rem', color: '#999' }}>
      <p>© {new Date().getFullYear()} Fields Task Manager. All rights reserved.</p>
    </footer>
  );
};

export default Footer;