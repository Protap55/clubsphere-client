import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router";
const Logo = () => {
  return (
    <Link to="/" className="flex items-end  gap-2">
      <img src={logo} className="rounded-4xl w-12 h-12" alt="logo" />
      <h4 className="font-bold text-3xl text-primary">Clubsphere</h4>
    </Link>
  );
};

export default Logo;
