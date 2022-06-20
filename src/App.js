import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Components
import TopBar from "./components/topbar/TopBar";

// Pages
import Home from "./pages/home/Home";
import Write from "./pages/write/Write";
import Login from "./pages/login/Login";
import Single from "./pages/single/Single";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";

function App() {
  const user = true;
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Login />} />
        <Route path="/settings" element={user ? <Settings /> : <Login />} />
        <Route path="/post/:postId" element={user ? <Single /> : <Login />} />
        <Route path="*" element={<Navigate replace={true} to="/" />} />
      </Routes>
    </Router>
  );
}
export default App;