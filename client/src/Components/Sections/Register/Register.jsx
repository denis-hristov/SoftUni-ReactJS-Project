import { useState } from "react";
import baner from "/photos/Candy/BanerContacts.jpg";
import Navigation from "../../Parts/Navigation";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = formData;

    if (!name || !email || !password) {
      setError("All fields are required!");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters!");
      return;
    }

    // backend
    try {
      const response = await fetch("http://localhost:5173/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to register!");
      }

      setError("");
      setSuccess("Account created successfully!");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
    <div className="bannerContacts">
        <img src={baner} alt="baner" className="baner-photo" />
        <Navigation/>
    </div>

    <div className="register-container">
      <h2>Create an Account</h2>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
      <form onSubmit={handleSubmit}>
        <input
          className="registerName"
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          className="registerEmail"
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          className="registerPasswoed"
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit" className="registerButton">Sign Up</button>
      </form>
    </div>
    </>
  );
}
