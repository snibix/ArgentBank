import clsx from "clsx";
import PropTypes from "prop-types";

function Button({ type = "button", children, className }) {
  return (
    <button className={clsx("btn", className)} type={type}>
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.any,
  className: PropTypes.any,
};

export default Button;
