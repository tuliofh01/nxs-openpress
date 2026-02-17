import React from 'react';
import AdminSidebar from './AdminSidebar';
import { Outlet } from 'react-router-dom';

/**
 * AdminLayout Component
 * 
 * Wrapper for the administrative panel.
 * Uses a sidebar navigation instead of the top header.
 * 
 * Future enhancement: Include a top bar for user profile/logout here.
 */
const AdminLayout: React.FC = () => {
  return (
    <div className="admin-layout">
      <AdminSidebar />
      <div className="admin-content">
        {/* Renders the administrative child route element */}
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
