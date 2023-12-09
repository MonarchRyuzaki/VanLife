import React from "react";
import { useOutletContext } from "react-router-dom";
import { requireAuth } from "../../utils";
export async function loader() {
  return await requireAuth()
}

const ListedVansPricing = () => {
  const { price } = useOutletContext();
  return (
    <div className="text-[#161616] font-inter font-semibold text-3xl">
      ${price}
      <span className="font-normal">/day</span>
    </div>
  );
};

export default ListedVansPricing;
