import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PublicLayout from './components/layout/PublicLayout';
import AdminLayout from './components/layout/AdminLayout';
import Dashboard from './pages/admin/Dashboard';

/**
 * App Component
 * 
 * The root component that defines the application's routing structure.
 * We use React Router v6's <Routes> and <Route> for declarative routing.
 * 
 * Structure:
 * - Public Routes (wrapped in PublicLayout)
 *   - / : Home
 *   - /shop : Product Listing
 *   - /blog : Blog Posts
 * 
 * - Admin Routes (wrapped in AdminLayout)
 *   - /admin : Dashboard
 *   - /admin/* : Other management pages
 */
function App() {
  return (
    <Router>
      <Routes>
        {/* 
          PUBLIC ROUTES
          These routes share the standard site layout with Header/Footer.
        */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<h1>Welcome to OpenPress</h1>} />
          <Route path="/shop" element={<h1>Shop</h1>} />
          <Route path="/blog" element={<h1>Blog</h1>} />
          {/* Add more public routes here */}
        </Route>

        {/* 
          ADMIN ROUTES
          These routes share the Admin layout with the Sidebar.
          TODO: Add authentication guard (ProtectRoute component)
        */}
        <Route path="/admin" element={<AdminLayout />}>
          {/* Index route for /admin */}
          <Route index element={<Dashboard />} />
          
          {/* Sub-routes for specific admin functions */}
          <Route path="posts" element={<h1>Manage Posts</h1>} />
          <Route path="products" element={<h1>Manage Products</h1>} />
          <Route path="orders" element={<h1>Manage Orders</h1>} />
          <Route path="users" element={<h1>Manage Users</h1>} />
          <Route path="settings" element={<h1>Settings</h1>} />
        </Route>

        {/* 404 Route */}
        <Route path="*" element={
          <div style={{ padding: '2rem', textAlign: 'center' }}>
            <h2>404 - Page Not Found</h2>
            <p>The page you are looking for does not exist.</p>
          </div>
        } />

      </Routes>
    </Router>
  );
}

export default App;
