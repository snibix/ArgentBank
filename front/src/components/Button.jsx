import clsx from "clsx";
import PropTypes from "prop-types";

function Button({ type, label, className }) {
  return (
    <button className={clsx("btn", className)} type={type}>
      {label}{" "}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.any,
};

export default Button;
