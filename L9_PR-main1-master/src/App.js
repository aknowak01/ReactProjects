import './App.css';
import NavBar from "./components/navbar";
import Posts from "./components/posts";
import { Outlet } from "react-router-dom"
function App() {
  return (
      <div className="container-fluid">
          <NavBar />
          <div className="container">
              <Outlet />
          </div>
      </div>
  );
}

export default App;