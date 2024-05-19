// Snackbar.js
import React, { useState, useEffect } from "react";
import "./Snackbar.css";

const Snackbar = ({ message, duration = 3000 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [message, duration]);

  return <div className={`snackbar ${isVisible ? "show" : ""}`}>{message}</div>;
};

export default Snackbar;
