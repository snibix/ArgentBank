import PropTypes from "prop-types";
import nanoid from "../utils/nanoid";

function Checkbox({ name, label }) {
  const id = nanoid(name);
  return (
    <div className="input-remember">
      <input type="checkbox" id={id} name={name} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

Checkbox.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
};

export default Checkbox;
