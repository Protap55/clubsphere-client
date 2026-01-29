import React from "react";
import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router";

const Userlogin = () => {
  const { logOut } = useAuth();
  const handleLogOut = () => {
    logOut().then((result) => {
      console.log(result.user).catch((error) => {
        console.log(error);
      });
    });
  };
  return (
    <div>
      <button
        className="btn"
        popoverTarget="popover-1"
        style={{ anchorName: "--anchor-1" }}
      >
        Button
      </button>

      <ul
        className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
        popover="auto"
        id="popover-1"
        style={{ positionAnchor: "--anchor-1" }}
      >
        <li>
          <a>Profile</a>
        </li>
        <li>
          <a>Dashboard</a>
        </li>
        <li>
          <Link onClick={handleLogOut}> Logout</Link>
        </li>
      </ul>
    </div>
  );
};

export default Userlogin;
