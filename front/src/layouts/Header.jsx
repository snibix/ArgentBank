import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/img/argentBankLogo.png";

function Header() {
  const auth = useSelector((state) => state.auth);
  const isAuth = auth.token && auth.status === "success";

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
      {isAuth ? (
        <NavLink to="/user" className="main-nav-item">
          <i className="fa fa-user-circle"></i>
          {auth.user.firstName}
        </NavLink>
      ) : (
        <NavLink to="/login" className="main-nav-item">
          <i className="fa fa-user-circle"></i>
          Sign In
        </NavLink>
      )}
      {/* <NavLink to="/login" className="main-nav-item">
        <i className="fa fa-user-circle"></i>
        Sign In
      </NavLink> */}
    </nav>
  );
}

Header.propTypes = {};

export default Header;
