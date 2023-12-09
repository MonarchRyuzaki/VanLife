import React, { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLoaderData, useParams } from "react-router-dom";


const fetchData = async (id) => {
  const response = await fetch("https://vanlife-backend.onrender.com/api/hosts/vans/" + id);
  if (response.ok) {
    const res = await response.json();
    return res.van
  }
};

export async function loader({params}){
  return fetchData(params.id);
}

const ListedVansDetails = () => {
  const data = useLoaderData()
  const activeStyle = {
    color: "#161616",
    fontWeight: 600,
    textDecoration: "underline",
  };
  return (
    <div className="bg-[#FFF7ED] flex justify-center items-start px-6 sm:px-16 min-h-[100vh]">
      <div className="w-full xl:max-w-[1280px]">
        <Link
          to=".."
          relative="path"
          //   {/* This makes it go one level back urlwise(path) no route hierarchy wise */}
          className="text-sm font-inter font-medium text-[#201F1D] block my-8"
        >
          &lt;- <span className="hover:underline">Back to all vans</span>
        </Link>
        <div className="w-full flex gap-6 bg-white p-6 flex-col">
          <div className="flex gap-6">
            <img src={data.imageUrl} alt="" className="w-[200px] h-[200px]" />
            <div className="flex flex-col">
              <div
                className="capitalize text-[#FFEAD0] text-center px-4 py-2 rounded-lg my-7"
                style={{ backgroundColor: data.bgColor }}
              >
                {data.type}
              </div>
              <div className="text-[#161616] font-inter font-semibold text-2xl mb-2">
                {data.name}
              </div>
              <div className="text-[#161616] font-inter font-medium text-xl">
                <span className="font-bold">$ {data.price}</span> /day
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <NavLink
              className="font-inter font-normal text-[16px] leading-[22.92px] mr-4 md:mr-8 hover:underline hover:font-semibold"
              to="."
              end
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              Details
            </NavLink>
            <NavLink
              className="font-inter font-normal text-[16px] leading-[22.92px] mr-4 md:mr-8 hover:underline hover:font-semibold"
              to="pricing"
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              Pricing
            </NavLink>
            <NavLink
              className="font-inter font-normal text-[16px] leading-[22.92px] mr-4 md:mr-8 hover:underline hover:font-semibold"
              to="photos"
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              Photos
            </NavLink>
          </div>
          <Outlet context={{...data}}/>
        </div>
      </div>
    </div>
  );
};

export default ListedVansDetails;
