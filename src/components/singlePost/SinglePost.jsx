import axios from "axios";

import { useState, useEffect, useContext } from "react";
import { useLocation, NavLink } from "react-router-dom";
import { Context } from "../../context/Context";

import "./SinglePost.css";

export default function SinglePost() {
  const PF = "http://localhost:5000/images/";

  const { user } = useContext(Context);

  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const [post, setPost] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const { data } = await axios.get("/post/" + id);
      setPost(data);
      setTitle(data.title);
      setDescription(data.description);
    }; 

    getPost();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete("/post/delete/" + id, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (error) {}
  };

  const handleUpdate = async () => {
    try {
      await axios.put("/post/update/" + id, {
        username: user.username,
        title,
        description,
      });
      window.location.reload();
    } catch (error) {}
  };

  return (
    <div
      className="SinglePost"
      style={{ backgroundColor: updateMode ? "white" : "whitesmoke" }}
    >
      {post.photo && (
        <img className="singlePostImg" src={PF + post.photo} alt="" />
      )}

      {updateMode ? (
        <input
          type="text"
          value={title}
          className="singlePostTitleInput"
          onChange={(e) => setTitle(e.target.value)}
        />
      ) : (
        <h1 className="singlePostTitle">
          {post.title}

          {post.username === user.username && (
            <div className="singlePostEdit">
              <i
                className="singlePostIcon fa-regular fa-pen-to-square"
                onClick={() => setUpdateMode(true)}
              ></i>
              <i
                className="singlePostIcon fa-regular fa-trash-can"
                onClick={handleDelete}
              ></i>
            </div>
          )}
        </h1>
      )}

      <div className="singlePostInfo">
        <span
          className="singlePostAuthor"
          style={{
            marginTop: updateMode && "20px",
            marginBottom: updateMode && "20px",
          }}
        >
          Author: {post.username}
        </span>

        <span className="singlePostDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>

      {updateMode ? (
        <textarea
          className="singlePostDescInput"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      ) : (
        <p className="singlePostDesc">{post.description}</p>
      )}

      {updateMode ? (
        <button className="singlePostButton" onClick={handleUpdate}>
          Update
        </button>
      ) : (
        <></>
      )}
    </div>
  );
}
