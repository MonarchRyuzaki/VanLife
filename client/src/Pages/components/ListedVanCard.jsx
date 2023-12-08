import React from "react";
import { Link } from "react-router-dom";

const ListedVanCard = ({ id, name, price, imageUrl }) => {
  return (
    <Link to={id}>
      <div className="w-full flex gap-6 bg-white p-6">
        <img src={imageUrl} alt="" className="w-[120px] h-[120px]" />
        <div className="flex flex-col justify-center">
          <div className="text-[#161616] font-inter font-semibold text-2xl">
            {name}
          </div>
          <div className="text-[#4D4D4D] font-inter font-normal text-lg">
            ${price}/day
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ListedVanCard;
