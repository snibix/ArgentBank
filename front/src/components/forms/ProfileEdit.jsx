import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import useUpdateProfil from "../../../services/useUpdateProfil.js";

function ProfileEdit({ onClose }) {
  const { user } = useSelector((state) => state.auth);
  const { updateProfil, isLoading, isError, error } = useUpdateProfil();
  // TODO: -faire les cas d'erreur du form
  //TODO: empecher l'utilisateur lors du chargement
  //TODO: modifier le style des message d'erreur et le style du profilEdit
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
      <div className="buttonsEdit">
        <button type="submit">Save</button>
        <button type="button" onClick={onClose}>
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
