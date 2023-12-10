import React, { Suspense, useEffect, useState } from "react";
import { Await, defer, useLoaderData } from "react-router-dom";
import { requireAuth } from "../../utils";
import ListedVanCard from "./ListedVanCard";

const fetchData = async () => {
  let response; // Declare response outside the try block
  try {
    response = await fetch(
      "https://vanlife-backend.onrender.com/api/hosts/vans"
    );
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

export async function loader({ request }) {
  await requireAuth(request);
  return defer({ vansPromise: fetchData() });
}

function ListedVans() {
  const {vansPromise} = useLoaderData();
  const renderData = (vans) => {
    return (
      <div className="flex flex-col gap-6">
        {vans.map((v) => (
          <ListedVanCard key={v.id} {...v} />
        ))}
      </div>)
  }

  return (
    <div className="bg-[#FFF7ED] flex justify-center items-start px-6 sm:px-16 min-h-[100vh]">
      <div className="w-full xl:max-w-[1280px]">
        <h3 className="font-inter text-3xl text-[#161616] font-bold my-6">
          Your Listed Vans
        </h3>
        <Suspense fallback={<h2>Loading ...</h2>}>
          <Await resolve={vansPromise}>
            {renderData}
          </Await>
        </Suspense>
      </div>
    </div>
  );
}

export default ListedVans;
