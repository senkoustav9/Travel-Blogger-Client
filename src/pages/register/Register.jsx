import './Register.css';
import {Link} from 'react-router-dom';
export default function Register() {
  return (
    <div className='register'>
      <span className="registerTitle">Register</span>
        <form action ="" className='registerForm'>
            <label for="username">Username</label>
            <input className="registerInput" type="text" id="username" placeholder="Enter your Username..."/>
            <label for="email">Email</label>
            <input className="registerInput" type="email" id="email" placeholder="Enter your Email..."/>
            <label for="password">Password</label>
            <input className="registerInput" type="password" id="password" placeholder="Enter your Password..."/>
            <button className="registerButton">Register</button>
        </form>
        <Link to="/login"><button className="registerLoginButton">Login</button></Link>
    </div>
  )
}