import { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Button from "./Button";
import ProfileEdit from "./forms/ProfileEdit";

function UserHeader() {
  const auth = useSelector((state) => state.auth);
  const isAuth = auth.token;

  const [isModalOpen, setIsModalOpen] = useState(false);
  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {auth.user?.firstName} {auth.user?.lastName}!
      </h1>
      <Button className="edit-button" type="button" onClick={handleEditClick}>
        Edit Name
      </Button>
      <ProfileEdit
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        currentFirstName={auth.user?.firstName}
        currentLastName={auth.user?.lastName}
      />
    </div>
  );
}

export default UserHeader;
