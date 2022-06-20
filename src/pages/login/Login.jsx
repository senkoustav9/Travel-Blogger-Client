import './Login.css'
import {Link} from 'react-router-dom'
export default function Login() {
  return (
    <div className='Login'>
      <span className="loginTitle">Login</span>
        <form action ="" className='loginForm'>
            <label for="email">Email</label>
            <input className="loginInput" type="email" id="email" placeholder="Enter your Email"/>
            <label for="password">Password</label>
            <input className="loginInput" type="password" id="password" placeholder="Enter your Password"/>
            <button className="loginButton">Login</button>
        </form>
        <Link to="/register"><button className="loginRegisterButton">Register</button></Link>
    </div>
  )
}