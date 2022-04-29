function Dashboard() {
  return (
    <div className="Dashboard">
      <div className="header">
        <a href="/dashboard" className="logo">
          Mental Health Dashboard
        </a>
        <div className="header-right">
          <a className="active" href="/dashboard">
            Home
          </a>
          <a href="/profile">Profile</a>
          <a href="/">Logout</a>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
