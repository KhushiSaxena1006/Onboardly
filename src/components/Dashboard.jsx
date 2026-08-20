function Dashboard({ formData, onEdit, onLogout }) {
  const firstName =
    formData.fullName?.split(" ")[0] || "there";

  return (
    <div className="dashboard-page">

      <nav className="dashboard-nav">

        <div className="brand">
          <div className="brand-logo">O</div>
          <span>Onboardly</span>
        </div>

        <button
          className="logout-btn"
          onClick={onLogout}
        >
          Log Out
        </button>

      </nav>

      <main className="dashboard-content">

        <div className="welcome-section">
          <div>
            <p className="dashboard-label">
              YOUR WORKSPACE
            </p>

            <h1>
              Welcome, {firstName}! 👋
            </h1>

            <p>
              Your profile is complete and ready to use.
            </p>
          </div>

          <div className="profile-avatar">
            {firstName.charAt(0).toUpperCase()}
          </div>
        </div>

        <div className="dashboard-grid">

          <div className="main-card">

            <div className="card-header">
              <div>
                <h2>Your Profile</h2>
                <p>Your personal account information</p>
              </div>

              <button
                className="edit-btn"
                onClick={onEdit}
              >
                ✎ Edit Profile
              </button>
            </div>

            <div className="profile-details">

              <div className="detail-item">
                <div className="detail-icon">
                  👤
                </div>

                <div>
                  <small>FULL NAME</small>
                  <strong>{formData.fullName}</strong>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon">
                  📱
                </div>

                <div>
                  <small>PHONE NUMBER</small>
                  <strong>{formData.phone}</strong>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon">
                  ✉️
                </div>

                <div>
                  <small>EMAIL ADDRESS</small>
                  <strong>{formData.email}</strong>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon">
                  🔒
                </div>

                <div>
                  <small>PASSWORD</small>
                  <strong>••••••••</strong>
                </div>
              </div>

            </div>

          </div>

          <div className="side-card">

            <div className="status-icon">
              ✓
            </div>

            <h3>Profile Complete</h3>

            <p>
              Your account setup is 100% complete.
            </p>

            <div className="completion-bar">
              <div className="completion-fill" />
            </div>

            <strong className="completion-text">
              100% Complete
            </strong>

          </div>

        </div>

        <div className="feature-section">

          <h2>What's next?</h2>

          <div className="feature-grid">

            <div className="feature-card">
              <span>🚀</span>
              <h3>Get Started</h3>
              <p>
                Your profile is ready. Explore the
                platform and start building.
              </p>
            </div>

            <div className="feature-card">
              <span>🛡️</span>
              <h3>Account Secure</h3>
              <p>
                Your account information is safely
                stored on this device.
              </p>
            </div>

            <div className="feature-card">
              <span>⚡</span>
              <h3>All Set</h3>
              <p>
                You've completed every onboarding
                requirement successfully.
              </p>
            </div>

          </div>

        </div>

      </main>

      <footer className="dashboard-footer">
        Onboardly · User Onboarding Platform
      </footer>

    </div>
  );
}

export default Dashboard;