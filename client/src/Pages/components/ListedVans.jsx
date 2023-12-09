import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ListedVanCard from "./ListedVanCard";

const fetchData = async () => {
  let response; // Declare response outside the try block
  try {
    response = await fetch("https://vanlife-backend.onrender.com/api/hosts/vans");
    if (response.ok) {
      const res = await response.json();
      return res.van;
    }
  } catch (error) {
    // Access response.statusText and response.status here
    throw {
      message: "Failed to fetch Vans",
      statusText: response ? response.statusText : "Unknown",
      status: response ? response.status : 500,
    };
  }
};

export function loader(){
  return fetchData();
}

function ListedVans() {
  const vans = useLoaderData()
  return (
    <div className="bg-[#FFF7ED] flex justify-center items-start px-6 sm:px-16 min-h-[100vh]">
      <div className="w-full xl:max-w-[1280px]">
        <h3 className="font-inter text-3xl text-[#161616] font-bold my-6">
          Your Listed Vans
        </h3>
        <div className="flex flex-col gap-6">
          {vans.map((v) => (
            <ListedVanCard key={v.id} {...v} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListedVans;
