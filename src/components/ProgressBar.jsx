function ProgressBar({ step }) {
  const progress = `${(step / 3) * 100}%`;

  return (
    <div className="progress-container">

      <div className="progress-track">
        <div
          className="progress-fill"
          style={{ width: progress }}
        />
      </div>

      <div className="progress-steps">

        <div className={step >= 1 ? "active" : ""}>
          <span>1</span>
          <p>Personal</p>
        </div>

        <div className={step >= 2 ? "active" : ""}>
          <span>2</span>
          <p>Account</p>
        </div>

        <div className={step >= 3 ? "active" : ""}>
          <span>3</span>
          <p>Review</p>
        </div>

      </div>

    </div>
  );
}

export default ProgressBar;