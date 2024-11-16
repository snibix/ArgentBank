import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import useUpdateProfil from "../../services/useUpdateProfil";

function ProfileEdit({ onClose }) {
  const { user } = useSelector((state) => state.auth);
  const { updateProfil, isLoading, isError, error } = useUpdateProfil();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const profil = {
      firstName: e.target["firstName"].value,
      lastName: e.target["lastName"].value,
    };
    updateProfil(profil)
      .then(() => {
        onClose();
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="form-edit-user">
      <div className="input-edit">
        {isError && <div className="error-message">{error}</div>}
        <input
          name="firstName"
          type="text"
          minLength={2}
          required
          placeholder={user.firstName}
          label="First Name"
          disabled={isLoading}
        />

        <input
          name="lastName"
          type="text"
          minLength={2}
          required
          placeholder={user.lastName}
          label="Last Name"
          disabled={isLoading}
        />
      </div>
      <div className="buttonsEdit">
        <button type="submit" disabled={isLoading}>
          Save
        </button>
        <button type="button" onClick={onClose} disabled={isLoading}>
          Cancel
        </button>
      </div>
    </form>
  );
}

ProfileEdit.propTypes = {
  onClose: PropTypes.func,
};

export default ProfileEdit;
