import PropTypes from "prop-types";

function Checkbox({ name, label }) {
  const id = name + "-" + Math.floor(Math.random() * 10000);
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
