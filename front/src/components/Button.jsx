import clsx from "clsx";
import PropTypes from "prop-types";

function Button({ type = "button", children, className, onClick, ...args }) {
  return (
    <button
      className={clsx("btn", className)}
      type={type}
      onClick={onClick}
      {...args}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.any,
  className: PropTypes.any,
  onClick: PropTypes.func,
};

export default Button;
