import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../../redux/thunks/updateUser.js";

function ProfileEdit({ onClose }) {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const profil = {
      firstName: e.target["firstName"].value,
      lastName: e.target["lastName"].value,
    };
    dispatch(updateUser(profil))
      .unwrap()
      .then(() => {
        onClose();
      })
      .catch((e) => {
        console.error("Erreur lors de la mise à jour du profil:", e);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          name="firstName"
          type="text"
          minLength={2}
          required
          placeholder={user.firstName}
          label="First Name"
        />
        <input
          name="lastName"
          type="text"
          minLength={2}
          required
          placeholder={user.lastName}
          label="Last Name"
        />
      </div>
      <button type="submit">Save</button>
      <button type="button" onClick={onClose}>
        Cancel
      </button>
    </form>
  );
}

ProfileEdit.propTypes = {
  onClose: PropTypes.func,
};

export default ProfileEdit;
