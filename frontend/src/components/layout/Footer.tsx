import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="main-footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} OpenPress. Licensed under Apache 2.0.</p>
      </div>
    </footer>
  );
};

export default Footer;
