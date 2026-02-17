import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="main-header">
      <div className="container">
        <Link to="/" className="logo">OpenPress</Link>
        <nav>
          <Link to="/blog">Blog</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/cart">Cart (0)</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
