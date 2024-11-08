import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function Private() {
  const auth = useSelector((state) => state.auth);
  const isAuth = auth.token;

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
}

Private.propTypes = {};

export default Private;
