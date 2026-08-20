import { useState } from "react";

function AccountDetails({
  register,
  errors,
  onBack,
  onNext,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const hasErrors = Object.keys(errors).length > 0;

  return (
    <div className="form-section">

      <div className="section-heading">
        <div className="step-number">02</div>

        <div>
          <h2>Account Details</h2>
          <p>Create your secure account credentials.</p>
        </div>
      </div>

      <div className="input-group">
        <label htmlFor="email">
          Email Address
        </label>

        <input
          id="email"
          type="email"
          placeholder="you@example.com"
          {...register("email")}
        />

        {errors.email && (
          <span className="error">
            {errors.email.message}
          </span>
        )}
      </div>

      <div className="input-group">
        <label htmlFor="password">
          Password
        </label>

        <div className="password-wrapper">
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Minimum 8 characters"
            {...register("password")}
          />

          <button
            type="button"
            className="password-toggle"
            onClick={() =>
              setShowPassword(!showPassword)
            }
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        {errors.password && (
          <span className="error">
            {errors.password.message}
          </span>
        )}
      </div>

      <div className="input-group">
        <label htmlFor="confirmPassword">
          Confirm Password
        </label>

        <div className="password-wrapper">
          <input
            id="confirmPassword"
            type={
              showConfirmPassword
                ? "text"
                : "password"
            }
            placeholder="Re-enter your password"
            {...register("confirmPassword")}
          />

          <button
            type="button"
            className="password-toggle"
            onClick={() =>
              setShowConfirmPassword(
                !showConfirmPassword
              )
            }
          >
            {showConfirmPassword ? "Hide" : "Show"}
          </button>
        </div>

        {errors.confirmPassword && (
          <span className="error">
            {errors.confirmPassword.message}
          </span>
        )}
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
          type="button"
          className="primary-btn"
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

export default AccountDetails;