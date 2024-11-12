import PropTypes from "prop-types";
import nanoid from "../utils/nanoid";

function Input({ name, label, type = "text", ...args }) {
  const id = nanoid(name);
  return (
    <div className="input-wrapper">
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} name={name} {...args} />{" "}
    </div>
  );
}

Input.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
};

export default Input;
