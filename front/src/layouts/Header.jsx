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
      <NavLink to="/login" className="main-nav-item">
        <i className="fa fa-user-circle"></i>
        Sign In
      </NavLink>
    </nav>
  );
}

Header.propTypes = {};

export default Header;
