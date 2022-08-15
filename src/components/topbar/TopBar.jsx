import {Link,NavLink} from 'react-router-dom';

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useContext } from 'react';
import { Context } from '../../context/Context';

import './TopBar.css';

const TopBar = () => {
  const {user,dispatch} = useContext(Context);

  const PF = "http://localhost:5000/images/";
  
  const handleLogout = () => {
    dispatch({type: "LOGOUT"});
    toast.success("LOGGED OUT SUCCESSFULLY")
  }

  return (
    <div className="TopBar">
        <div className="topLeft">
          <div className="topIcon">Tech BLOGS</div>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem"><NavLink to="/" style={{textDecoration: "none", color: "inherit"}}>HOME</NavLink></li>
                <li className="topListItem"><NavLink  to="/write" style={{textDecoration: "none", color: "inherit"}}>WRITE</NavLink></li>
                <li className="topListItem" onClick={handleLogout}>{user && "LOGOUT"}</li>
            </ul>
        </div>
        <div className="topRight">
            {
              user?
              <Link to="/settings" replace={true}>
                { user.profilePic? 
                  (<img className="topImg" src={PF + user.profilePic} alt=""/>)
                  :(
                    <i className="fa-solid fa-user topIconProfilePic"></i>
                  )
                }
                </Link>
              :
              <ul className="topList">
                <li className="topListItem"><NavLink to="/login" style={{textDecoration: "none", color: "inherit"}}>LOGIN</NavLink></li>
                <li className="topListItem"><NavLink to="/register" style={{textDecoration: "none", color: "inherit"}}>REGISTER</NavLink></li>
              </ul>
            }
        </div>
    </div>
  )
}
export default TopBar;