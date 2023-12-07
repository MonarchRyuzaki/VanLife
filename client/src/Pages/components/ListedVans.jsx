import React, { useEffect, useState } from "react";
import ListedVanCard from "./ListedVanCard";

function ListedVans() {
  const [vans, setVans] = useState([]);
  const fetchData = async () => {
    const response = await fetch("https://vanlife-backend.onrender.com/api/hosts/vans");
    if (response.ok) {
      const res = await response.json();
      setVans(res.van);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
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
