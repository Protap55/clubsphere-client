import React from "react";
import { Outlet } from "react-router";
import NavBar from "../pages/Shared/NavBar/NavBar";
import Footer from "../pages/Shared/Footer/Footer";
import authImage from "../assets/auth-image.png";
const AuthLayout = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="grid grid-cols-2 gap-8 mt-12 mb-12 items-center">
        <div className="flex items-center justify-center">
          <Outlet></Outlet>
        </div>
        <img src={authImage} className="rounded-2xl object-cover" alt="auth" />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AuthLayout;
