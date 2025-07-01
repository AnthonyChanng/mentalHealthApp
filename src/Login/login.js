import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
    // Clear error when user starts typing
    if (errors[id]) {
      setErrors((prev) => ({
        ...prev,
        [id]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Login successful:", formData);
      navigate("/userHome");
    }
  };

  return (
    <div className="login-bg">
      <div className="login-container">
        <h2 className="login-title">Welcome Back to The Mindful Portal</h2>
        <p className="login-subtext">
          Login to your portal to manage your progress, journal, and more.
        </p>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email" className="login-label">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className={`login-input ${errors.email ? "error" : ""}`}
            placeholder="you@email.com"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <span className="error-message">{errors.email}</span>
          )}

          <label htmlFor="password" className="login-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            className={`login-input ${errors.password ? "error" : ""}`}
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && (
            <span className="error-message">{errors.password}</span>
          )}

          <button type="submit" className="login-page-btn">
            Login to portal →
          </button>
        </form>
        <div className="login-links">
          <a href="#" className="forgot-link">
            Forgot password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
