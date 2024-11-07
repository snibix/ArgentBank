import PropTypes from "prop-types";

function Feature({ icon, alt, title, children }) {
  return (
    <div className="feature-item">
      <img src={icon} alt={alt} className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{children}</p>
    </div>
  );
}

Feature.propTypes = {
  icon: PropTypes.any,
  alt: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.any,
};

export default Feature;
