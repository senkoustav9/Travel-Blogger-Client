import axios from "axios";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Link } from "react-router-dom";
import { useState } from "react";

import "./Register.css";

export default function Register() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });     
      toast.success(`Registration complete, ${username} !`);
      
      setTimeout(() => {
        res.data && window.location.replace("/login")
      }, "2000")

    } catch (error) {
      console.log(error);
      toast.error("Oops something went wrong");
    }
  };

  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form action="" className="registerForm" onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          className="registerInput"
          type="text"
          id="username"
          name="username"
          placeholder="Enter your Username..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          className="registerInput"
          type="email"
          id="email"
          name="email"
          placeholder="Enter your Email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          className="registerInput"
          type="password"
          id="password"
          name="password"
          placeholder="Enter your Password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="registerButton" type="submit">
          Register
        </button>
      </form>
      <Link to="/login">
        <button className="registerLoginButton">Login</button>
      </Link>
    </div>
  );
}