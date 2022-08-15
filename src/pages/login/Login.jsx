import { Link } from "react-router-dom";
import { useRef, useContext } from "react";
import { Context } from "../../context/Context";
import "./Login.css";
import axios from "axios";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();

  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });

      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      toast.success(`Welcome, ${res.data.username}!`);
    } 
    catch (error) {
      dispatch({ type: "LOGIN_FAILURE" });
      console.log(error.response);
      toast.error("Login Failed!");
    }
  };

  return (
    <div className="Login">
      <span className="loginTitle">Login</span>
      <form action="" className="loginForm" onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          className="loginInput"
          name="username"
          type="text"
          id="username"
          placeholder="Enter your username"
          ref={userRef}
        />
        <label htmlFor="password">Password</label>
        <input
          className="loginInput"
          type="password"
          id="password"
          placeholder="Enter your Password"
          ref={passwordRef}
        />
        <button className="loginButton" type="submit" disabled={isFetching}>
          Login
        </button>
      </form>
      <Link to="/register">
        <button className="loginRegisterButton" disabled={isFetching}>
          Register
        </button>
      </Link>
    </div>
  );
}