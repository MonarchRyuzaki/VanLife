import React from "react";
import { Link, NavLink } from "react-router-dom";
import imageUrl from "/src/assets/avatar-icon.png"

const Header = () => {
  const activeStyle = {
    color: "#161616",
    fontWeight: 600,
    textDecoration: "underline",
  };
  return (
    <nav className="bg-[#FFF7ED] flex justify-center items-center px-6 sm:px-16">
      <div className="w-full xl:max-w-[1280px] flex justify-between items-center py-4">
        <Link
          to="."
          className="font-inter font-extrabold text-[26px] leading-[40px]"
        >
          #VANLIFE
        </Link>
        <div className="flex justify-center items-center">
          <NavLink
            to="host"
            className="font-inter font-semibold text-[16px] leading-[22.92px] mr-4 md:mr-8 hover:underline"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Host
          </NavLink>
          <NavLink
            to="about"
            className="font-inter font-semibold text-[16px] leading-[22.92px] mr-4 md:mr-8 hover:underline"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            About
          </NavLink>
          <NavLink
            to="vans"
            className="font-inter font-semibold text-[16px] leading-[22.92px] mr-4 md:mr-8 hover:underline"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Vans
          </NavLink>
          <Link to="login" className="login-link">
            <img
              src={imageUrl}
              className="login-icon"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
