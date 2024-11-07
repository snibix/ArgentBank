import PropTypes from "prop-types";

function Input({ name, label, type }) {
  const id = name + "-" + Math.floor(Math.random() * 10000);
  return (
    <div className="input-wrapper">
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} name={name} />
    </div>
  );
}

Input.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
};

export default Input;
