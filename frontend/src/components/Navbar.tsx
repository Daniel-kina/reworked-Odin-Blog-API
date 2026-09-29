import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <nav>
        <NavLink to={"/"}>Blogies</NavLink>
        <div>Search</div>
        <NavLink to={"/account"}>Account/Login</NavLink>
      </nav>
    </header>
  );
}
