import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "./slika1.svg";
import "./Logo.css";

const Logo = () => {
  const navigate = useNavigate();
  return (
    <img
      className="logo-main"
      src={logo}
      alt="Logo"
      onClick={() => navigate("/")}
    />
  );
};

export default Logo;
