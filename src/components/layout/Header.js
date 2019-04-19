import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={headerStyle}>
      <h1>TodoList*</h1>
      <Link style={linkStyle} to='/'>Home</Link>
      |
      <Link style={linkStyle} to='/about'>About</Link>
    </header>
  )
}

const linkStyle = {
  color: 'black',
  textDecoration: 'none',
}

const headerStyle = {
  backgroundColor: '#333',
  textAlign: 'center',
  padding: '10px'
}

export default Header;