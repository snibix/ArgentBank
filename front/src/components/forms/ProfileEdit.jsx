import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../../../redux/slices/updateUser.js";

function ProfileEdit({ isOpen, onClose, currentFirstName, currentLastName }) {
  const [firstName, setFirstName] = useState(currentFirstName);
  const [lastName, setLastName] = useState(currentLastName);
  const dispatch = useDispatch();

  if (!isOpen) return null;

  const handleSave = (e) => {
    e.preventDefault();
    // Action pour mettre à jour le nom dans le store Redux
    dispatch(updateUser({ firstName, lastName }));
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Edit Name</h2>
        <form onSubmit={handleSave}>
          <div>
            <label>First Name</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <label>Last Name</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <button type="submit">Save</button>
          <button type="button" onClick={onClose}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

ProfileEdit.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  currentFirstName: PropTypes.string.isRequired,
  currentLastName: PropTypes.string.isRequired,
};
export default ProfileEdit;
