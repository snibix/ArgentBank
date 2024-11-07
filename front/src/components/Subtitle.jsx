import PropTypes from "prop-types";

function Subtitle({ children }) {
  return <p className="subtitle">{children}</p>;
}

Subtitle.propTypes = {
  children: PropTypes.any,
};

export default Subtitle;
