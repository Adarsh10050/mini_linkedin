import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Dashboard.css';

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any auth token if used
    localStorage.removeItem('token');
    // Redirect to sign-in page
    navigate('/');
  };

  return (
    <div className="dashboard-container">
      <nav className="navbar">
        <h1 className="logo">Mini LinkedIn</h1>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </nav>

      <div className="content">
        <div className="left-panel">
          <div className="profile-card">
            <img
              src="https://randomuser.me/api/portraits/men/75.jpg"
              alt="User"
              className="profile-pic"
            />
            <h2>Adarsh Dev</h2>
            <p>Frontend Developer</p>
            <div className="connections-posts">
              <div>
                <strong>Connections</strong>
                <p>150+</p>
              </div>
              <div>
                <strong>Posts</strong>
                <p>32</p>
              </div>
            </div>
          </div>
        </div>

        <div className="main-panel">
          <h3>Recent Activity</h3>
          <ul className="activity-feed">
            <li>✅ You connected with Riya Sharma</li>
            <li>🖼️ You updated your profile picture</li>
            <li>💬 You commented on a post</li>
            <li>📢 You published a new post: <strong>"10 Tips to Learn React Faster"</strong></li>
          </ul>

          <div className="post">
            <h4>📢 Just Posted:</h4>
            <p>Check out my new blog on frontend development trends in 2025!</p>
            <div className="actions">
              <button className="like-btn">👍 Like</button>
              <button className="comment-btn">💬 Comment</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
