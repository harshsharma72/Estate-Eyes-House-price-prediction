import React from "react";
import "./Alert.css";

const Alert = ({ message, type = "info", onClose }) => {
  if (!message) return null;

  return (
    <div className={`alert alert-${type}`}>
      <span className="alert-message">{message}</span>
      <button className="alert-close" onClick={onClose}>
        &times;
      </button>
    </div>
  );
};

export default Alert;
