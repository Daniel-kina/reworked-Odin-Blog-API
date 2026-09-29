import "./App.css";
import Navbar from "./components/Navbar";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="app-container">
      <Navbar></Navbar>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
}

export default App;
