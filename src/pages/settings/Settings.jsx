import "./Settings.css";
import "../../components/sidebar/SideBar";
import SideBar from "../../components/sidebar/SideBar";

export default function Settings() {
  return (
    <div className="Settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form action="" className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://images.pexels.com/photos/12285563/pexels-photo-12285563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon fa-solid fa-user"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
            <label>Username</label>
            <input type="text" placeholder="Safak" />
            <label>Email</label>
            <input type="email" placeholder="Safak@dev.io" />
            <label>Password</label>
            <input type="password" />
            <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <SideBar />
    </div>
  );
}
