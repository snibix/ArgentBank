import PropTypes from "prop-types";
import nanoid from "../utils/nanoid";

function Input({ name, label, type, minLenght, required }) {
  const id = nanoid(name);
  return (
    <div className="input-wrapper">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        minLength={minLenght}
        required={required}
      />{" "}
    </div>
  );
}

Input.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  minLenght: PropTypes.number,
  required: PropTypes.bool,
};

export default Input;
