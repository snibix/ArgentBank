import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Button from "./Button";

function UserHeader() {
  const auth = useSelector((state) => state.auth);
  const isAuth = auth.token && auth.status === "success";

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {auth.user?.firstName} {auth.user?.lastName}!
      </h1>
      <Button className="edit-button" type="button">
        Edit Name
      </Button>
    </div>
  );
}

export default UserHeader;
