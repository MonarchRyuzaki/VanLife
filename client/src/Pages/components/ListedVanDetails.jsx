import React from "react";
import { useOutletContext } from "react-router-dom";

export async function loader(){
  return null;
}


const ListedVanDetails = () => {
  const { name, type, description } = useOutletContext();

  return (
    <div className="font-inter text-[#161616]">
        <div className="mb-4"><span className="font-semibold">Name: </span>{name}</div>
        <div className="capitalize mb-4"><span className="font-semibold">Category: </span>{type}</div>
        <div className="mb-4"><span className="font-semibold">Description: </span>{description}</div>
        <div><span className="font-semibold">Visibility: </span> Public</div>
    </div>
  )
};

export default ListedVanDetails;
