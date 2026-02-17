import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <p>TODO: Integrate Chart.js for visitor stats.</p>
      <p>TODO: Fetch recent orders from /api/orders.</p>
      <div className="stats-grid">
        {/* Placeholder for Stats Cards */}
        <div className="card">Orders: 0</div>
        <div className="card">Revenue: $0.00</div>
      </div>
    </div>
  );
};

export default Dashboard;
