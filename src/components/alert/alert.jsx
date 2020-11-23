import React from "react";
import PropTypes from "prop-types";
import "./alert.css";


const Alert = ({message, onClose}) => {
  return (
    <div className="alert">
      <span className="closebtn" onClick={onClose}>&times;</span>
      {message}
    </div>);
};

Alert.propTypes = {
  message: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};


export default Alert;
