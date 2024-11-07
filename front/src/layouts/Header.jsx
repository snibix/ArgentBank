import { Link, NavLink } from "react-router-dom";
import logo from "../assets/img/argentBankLogo.png";
function Header() {
  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/user">User</NavLink>
    </nav>
  );
}

Header.propTypes = {};

export default Header;
<nav className="main-nav">
  <a className="main-nav-logo" href="./index.html"></a>
  <div>
    <a className="main-nav-item" href="./sign-in.html">
      <i className="fa fa-user-circle"></i>
      Sign In
    </a>
  </div>
</nav>;
