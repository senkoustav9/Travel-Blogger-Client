import { NavLink } from "react-router-dom";
import "./Post.css";

const Post = ({ post }) => {

  const PF = "http://localhost:5000/images/"
  return (
    <div className="Post">
      {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}
      <div className="postInfo">
        <NavLink
          to={`/post/${post._id}`}
          style={{ textDecoration: "none", color: "inherit" }}>
          <span className="postTitle">{post.title}</span>
        </NavLink>
        <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
        <p className="postDesc">{post.description}</p>
      </div>
    </div>
  );
};
export default Post;