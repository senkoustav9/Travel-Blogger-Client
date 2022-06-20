import { NavLink } from "react-router-dom";
import Post from "../post/Post";
import "./Posts.css";

const Posts = () => {
  return (
    <div className="Posts">
      <NavLink to="/post/123" style={{textDecoration: "none", color: "inherit"}}><Post /></NavLink>
      <NavLink to="/post/123" style={{textDecoration: "none", color: "inherit"}}><Post /></NavLink>
      <NavLink to="/post/123" style={{textDecoration: "none", color: "inherit"}}><Post /></NavLink>
      <NavLink to="/post/123" style={{textDecoration: "none", color: "inherit"}}><Post /></NavLink>
    </div>
  );
};
export default Posts;
