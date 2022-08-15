// React Router DOM
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Toast Container
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// React Hooks 
import { useContext } from "react";

// Context
import { Context } from "./context/Context";

// Components
import TopBar from "./components/topbar/TopBar";

// Pages
import Home from "./pages/home/Home";
import Write from "./pages/write/Write";
import Login from "./pages/login/Login";
import SinglePostPage from "./pages/singlePostPage/SinglePostPage";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <TopBar />
      <ToastContainer autoClose={1000} />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/write" element={user ? <Write /> : <Login />} />
        <Route path="/post/:postId" element={user ? <SinglePostPage /> : <Login />} />
        <Route path="/settings" element={user ? <Settings /> : <Login />} />
        
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        
        <Route path="*" element={<Navigate replace={true} to="/" />} />
      </Routes>
    </Router>
  );
}
export default App;