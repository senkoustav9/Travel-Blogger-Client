import axios from "axios";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./Settings.css";

import { useContext, useState } from "react";
import { Context } from "../../context/Context";

function Settings() {
  const PF = "http://localhost:5000/images/";
  const { user, dispatch } = useContext(Context);

  const [file, setFile] = useState(null);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();

    dispatch({ type: "UPDATE_START" });

    let updatedUser = {
      userId: user._id,
      username,
      email
    };

    if(password !== "")
      updatedUser.password = password;

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name.split(" ").join("");
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;

      try {
        await axios.post("/upload", data);
      } catch (error) {
        console.log(error);
      }
    }

    try {
      const { data } = await axios.put("/user/update/" + user._id, updatedUser);
      dispatch({ type: "UPDATE_SUCCESS", payload: data });
      toast.success("User Updated Successfully");
    } catch (error) {
      dispatch({ type: "UPDATE_FAILURE" });
      toast.error("Oops something went wrong");
      console.log(error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete("/user/delete/" + user._id, {
        data: { userId: user._id, username: user.username },
      });
      toast.success("User Deleted Successfully");
      dispatch({ type: "LOGOUT" });
    } catch (error) {
      toast.error("Oops something went wrong");
      console.log(error);
    }
  };

  return (
    <div className="Settings">
      <div className="settingsTitle">
        <span className="settingsUpdateTitle">Update Account</span>
        <span className="settingsDeleteTitle" onClick={handleDelete}>
          Delete Account
        </span>
      </div>
      <form action="" className="settingsForm" onSubmit={handleUpdate}>
        <label>Profile Picture</label>
        <div className="settingsProfilePic">
          <img
            src={
              file
                ? URL.createObjectURL(file)
                : user.profilePic
                ? PF + user.profilePic
                : "./default.jpg"
            }
            alt=""
          />
          <label htmlFor="fileInput">
            <i className="settingsProfilePicIcon fa-solid fa-user"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>

        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />

        <button className="settingsSubmit" type="submit">
          Update
        </button>
      </form>
    </div>
  );
}
export default Settings;