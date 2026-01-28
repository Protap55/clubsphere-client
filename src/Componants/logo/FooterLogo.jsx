import React from "react";
import logo from "../../assets/logo.png";
const FooterLogo = () => {
  return (
    <div>
      <div className="flex items-end  gap-2">
        <img src={logo} className="rounded-4xl w-12 h-12" alt="logo" />
        <h4 className="font-bold text-3xl text-white">Clubsphere</h4>
      </div>
    </div>
  );
};

export default FooterLogo;
