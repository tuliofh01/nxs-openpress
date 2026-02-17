import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

/**
 * PublicLayout Component
 * 
 * Wrapper for all public-facing pages (Home, Shop, Blog).
 * It includes the standard Header and Footer.
 * 
 * Uses <Outlet /> from react-router-dom to render child routes.
 */
const PublicLayout: React.FC = () => {
  return (
    <div className="public-layout">
      <Header />
      <main>
        {/* Renders the child route element */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PublicLayout;
