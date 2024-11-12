import { useState } from "react";
import { useSelector } from "react-redux";
import Button from "./Button";
import ProfileEdit from "./forms/ProfileEdit";

function UserHeader() {
  const { user } = useSelector((state) => state.auth);
  const [isEditing, setIsEditing] = useState(false);

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
            {user.firstName} {user.lastName}!
          </>
        )}
      </h1>

      {isEditing ? (
        <ProfileEdit
          onClose={() => setIsEditing(false)}
          currentFirstName={user.firstName}
          currentLastName={user.lastName}
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
