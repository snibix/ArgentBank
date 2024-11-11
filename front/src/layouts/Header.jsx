import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { logout } from "../../redux/slices/authSlice";
import logo from "../assets/img/argentBankLogo.png";

function Header() {
  const auth = useSelector((state) => state.auth);
  const isAuth = auth.token && auth.user;

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

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
        <div className="main-nav-items">
          <NavLink to="/user" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            {auth.user.firstName}
          </NavLink>
          {/* Optionnel : Ajouter un bouton de déconnexion */}
          <NavLink to="/" className="main-nav-item" onClick={handleLogout}>
            <i className="fa fa-sign-out"></i>
            Sign Out
          </NavLink>
        </div>
      ) : (
        <NavLink to="/login" className="main-nav-item">
          <i className="fa fa-user-circle"></i>
          Sign In
        </NavLink>
      )}
    </nav>
  );
}

Header.propTypes = {};

export default Header;
