import React from "react";
import { Link } from "react-router-dom";
import "./Button.scss";

const Button = ({ title, color, background, path, className }) => {
  return (
    <button className={className} style={{ backgroundColor: background }}>
      <a style={{ textDecoration: "none", color: color }}> {title}</a>
    </button>
  );
};

export default Button;
