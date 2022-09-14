import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import LogoW from "../assets/LogoW.png";

const Navbar = ({ user }) => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const logout = () => {
    window.open("http://localhost:4000/auth/logout", "_self");
  };

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#2B2B46] text-[#f4f4f4]">
      <div>
        <img src={LogoW} alt="CoachAnnaLogo" style={{ width: "45px" }} />
      </div>
      <div>
        <ul className="hidden md:flex">
          {/* <li>Welcome, {user.displayName}</li> */}
          <li>
            <a href="/workouts">Workouts</a>
          </li>
          <li>
            <a href="/workouts/tips">Training Tips</a>
          </li>
          <li>
            <a href="/workouts/new">Create Workout</a>
          </li>
          <li onClick={logout}>
            Logout
          </li>
        </ul>
        {/* Hamburger */}
        <div onClick={handleClick} className="md:hidden z-10">
          {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* mobile menu */}
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute top-0 left-0 w-full h-screen bg-[#2b2b46] flex flex-col justify-center items-center"
          }
        >
          <li className="py-6 text-4xl">
            <a href="/workouts">Workouts</a>
          </li>
          <li className="py-6 text-4xl">
            <a href="/workouts/tips">Training Tips</a>
          </li>
          <li className="py-6 text-4xl">
            <a href="/workouts/new">Create Workout</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
