function PersonalInfo({ register, errors, onNext }) {
  const hasErrors = Object.keys(errors).length > 0;

  return (
    <div className="form-section">

      <div className="section-heading">
        <div className="step-number">01</div>

        <div>
          <h2>Personal Information</h2>
          <p>Let's start with some basic information.</p>
        </div>
      </div>

      <div className="input-group">
        <label htmlFor="fullName">
          Full Name
        </label>

        <input
          id="fullName"
          type="text"
          placeholder="e.g. Khushi Saxena"
          {...register("fullName")}
        />

        {errors.fullName && (
          <span className="error">
            {errors.fullName.message}
          </span>
        )}
      </div>

      <div className="input-group">
        <label htmlFor="phone">
          Phone Number
        </label>

        <input
          id="phone"
          type="tel"
          placeholder="10-digit mobile number"
          {...register("phone")}
        />

        {errors.phone && (
          <span className="error">
            {errors.phone.message}
          </span>
        )}
      </div>

      <div className="button-row">
        <button
          type="button"
          className="primary-btn full-btn"
          onClick={onNext}
          disabled={hasErrors}
        >
          Continue
          <span>→</span>
        </button>
      </div>

    </div>
  );
}

export default PersonalInfo;