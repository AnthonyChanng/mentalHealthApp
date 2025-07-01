import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signUp.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
    if (errors[id]) {
      setErrors((prev) => ({
        ...prev,
        [id]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

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

    if (!formData.confirmPassword.trim()) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Signup successful:", formData);
      navigate("/");
    }
  };

  return (
    <div className="signUp-bg">
      <div className="signUp-container">
        <h2 className="signUp-title">Welcome to The Mindful Portal</h2>
        <p className="signUp-subtext">
          Create an account for the Mindful Portal and gain access to all our
          great tools.
        </p>
        <form className="signUp-form" onSubmit={handleSubmit}>
          <label htmlFor="name" className="signUp-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            className={`signUp-input ${errors.name ? "error" : ""}`}
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}

          <label htmlFor="email" className="signUp-label">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className={`signUp-input ${errors.email ? "error" : ""}`}
            placeholder="you@email.com"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <span className="error-message">{errors.email}</span>
          )}

          <label htmlFor="password" className="signUp-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            className={`signUp-input ${errors.password ? "error" : ""}`}
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && (
            <span className="error-message">{errors.password}</span>
          )}

          <label htmlFor="confirmPassword" className="signUp-label">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            className={`signUp-input ${errors.confirmPassword ? "error" : ""}`}
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && (
            <span className="error-message">{errors.confirmPassword}</span>
          )}

          <button type="submit" className="signUp-page-btn">
            Sign up for portal
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
