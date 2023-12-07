import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

function HostLayout() {
  const activeStyle = {
    color: "#161616",
    fontWeight: 600,
    textDecoration: "underline",
  };
  return (
    <>
      <nav className="bg-[#FFF7ED] flex justify-center items-center px-6 sm:px-16">
        <div className="w-full xl:max-w-[1280px] flex items-center py-4">
          <NavLink
            to="."
            end
            className="font-inter font-normal text-[16px] leading-[22.92px] mr-4 md:mr-8 hover:underline hover:font-semibold"
            style={({ isActive }) => isActive ? activeStyle : null}
          >
            Dashboard
          </NavLink>
          <NavLink
            to="income"
            className="font-inter font-normal text-[16px] leading-[22.92px] mr-4 md:mr-8 hover:underline hover:font-semibold"
            style={({ isActive }) => isActive ? activeStyle : null}
          >
            Income
          </NavLink>
          <NavLink
            to="vans"
            className="font-inter font-normal text-[16px] leading-[22.92px] hover:underline mr-4 md:mr-8 hover:font-semibold"
            style={({ isActive }) => isActive ? activeStyle : null}
          >
            Vans
          </NavLink>
          <NavLink
            to="reviews"
            className="font-inter font-normal text-[16px] leading-[22.92px] hover:underline hover:font-semibold"
            style={({ isActive }) => isActive ? activeStyle : null}
          >
            Reviews
          </NavLink>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default HostLayout;
