import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Button from "./Button";
import ProfileEdit from "./forms/ProfileEdit";

function UserHeader() {
  const auth = useSelector((state) => state.auth);
  const isAuth = auth.token;
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    console.log("Informations utilisateur dans UserHeader :", auth.user);
  }, [auth.user]);

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  const handleEditClick = () => {
    setIsEditing(true);
  };

  return (
    <div className="header">
      <h1>
        Welcome back
        {!isEditing && (
          <>
            <br />
            {auth.user?.firstName} {auth.user?.lastName}!
          </>
        )}
      </h1>

      {isEditing ? (
        <ProfileEdit
          onClose={() => setIsEditing(false)}
          currentFirstName={auth.user?.firstName}
          currentLastName={auth.user?.lastName}
        />
      ) : (
        <Button className="edit-button" type="button" onClick={handleEditClick}>
          Edit Name
        </Button>
      )}
    </div>
  );
}

export default UserHeader;
