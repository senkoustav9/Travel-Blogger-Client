import './TopBar.css'
import {Link,NavLink} from 'react-router-dom';
const TopBar = () => {
  const user = true;
  return (
    <div className="TopBar">
        <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook-square"></i>
        <i className="topIcon fa-brands fa-twitter-square"></i>
        <i className="topIcon fa-brands fa-pinterest-square"></i>
        <i className="topIcon fa-brands fa-instagram-square"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem"><NavLink to="/" style={{textDecoration: "none", color: "inherit"}}>HOME</NavLink></li>
                <li className="topListItem"><NavLink  to="/write" style={{textDecoration: "none", color: "inherit"}}>WRITE</NavLink></li>
                <li className="topListItem">{user && "LOGOUT"}</li>
            </ul>
        </div>
        <div className="topRight">
            {
              user?
              <Link to="/settings" replace={true}><img className="topImg" src="https://images.pexels.com/photos/12285563/pexels-photo-12285563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/></Link>
              :
              <ul className="topList">
                <li className="topListItem"><NavLink to="/login" style={{textDecoration: "none", color: "inherit"}}>LOGIN</NavLink></li>
                <li className="topListItem"><NavLink to="/register" style={{textDecoration: "none", color: "inherit"}}>REGISTER</NavLink></li>
              </ul>
            }
            <i className="searchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
export default TopBar;