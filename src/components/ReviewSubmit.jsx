function ReviewSubmit({ formData, onBack }) {
  return (
    <div className="form-section">

      <div className="section-heading">
        <div className="step-number">03</div>

        <div>
          <h2>Review Your Profile</h2>
          <p>Everything look good? You're ready to go.</p>
        </div>
      </div>

      <div className="review-box">

        <div className="review-header">
          <span>Profile Information</span>
          <span className="verified-badge">
            ✓ Ready
          </span>
        </div>

        <div className="review-item">
          <div>
            <small>FULL NAME</small>
            <strong>{formData.fullName}</strong>
          </div>

          <span className="review-icon">👤</span>
        </div>

        <div className="review-item">
          <div>
            <small>PHONE NUMBER</small>
            <strong>{formData.phone}</strong>
          </div>

          <span className="review-icon">📱</span>
        </div>

        <div className="review-item">
          <div>
            <small>EMAIL ADDRESS</small>
            <strong>{formData.email}</strong>
          </div>

          <span className="review-icon">✉️</span>
        </div>

        <div className="review-item">
          <div>
            <small>PASSWORD</small>
            <strong>••••••••</strong>
          </div>

          <span className="review-icon">🔒</span>
        </div>

      </div>

      <div className="privacy-note">
        🔐 Your information is stored securely in your
        browser for this demo application.
      </div>

      <div className="button-row">

        <button
          type="button"
          className="secondary-btn"
          onClick={onBack}
        >
          ← Back
        </button>

        <button
          type="submit"
          className="primary-btn"
        >
          Create Profile
          <span>✓</span>
        </button>

      </div>

    </div>
  );
}

export default ReviewSubmit;