import { Suspense, useEffect, useState } from "react";
import {
  Link,
  defer,
  useLoaderData,
  useLocation,
  useParams,
  Await
} from "react-router-dom";
import { requireAuth } from "../utils";

const fetchData = async (id) => {
  try {
    // const apiUrl = process.env.SERVER_URL || "http://localhost:8080/api";
    //   const response = await fetch(`http://localhost:8080/api/vans/${id}`);
    const response = await fetch(
      `https://vanlife-backend.onrender.com/api/vans/${id}`
    );
    if (response.ok) {
      const result = await response.json();
      return result.van;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export async function loader({ params }) {
  await requireAuth();
  return defer({ vansPromise: fetchData(params.id) });
}

function VansDetailed() {
  const { vansPromise } = useLoaderData();
  const { state } = useLocation();
  const search = state ? (state.search.length > 0 ? state.search : "") : "";
  const backLink = `..?${search}`;
  const backText = state ? (state.type.length > 0 ? state.type : "") : "";
  const renderData = (vanData) => {
    let bgColor;
    if (vanData.type === "simple") {
      bgColor = "#E17654";
    } else if (vanData.type === "luxury") {
      bgColor = "#161616";
    } else if (vanData.type === "rugged") {
      bgColor = "#115E59";
    }
    return (
      <div className="w-full xl:max-w-[1280px]">
        <Link
          to={backLink}
          relative="path"
          // {/* This makes it go one level back urlwise(path) no route hierarchy wise */}
          className="text-sm font-inter font-medium text-[#201F1D] block my-8"
        >
          &lt;- <span className="hover:underline">Back</span>
        </Link>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-4 my-[50px]">
          <img
            src={vanData.imageUrl}
            alt=""
            className="w-[350px] md:w-[500px] mb-4"
          />
          <div className="lg:ml-10">
            <div
              className="text-center font-inter text-md font-semibold capitalize text-[#FFEAD0] px-6 py-2 rounded-lg max-w-[100px]"
              style={{ backgroundColor: bgColor }}
            >
              {vanData.type}
            </div>
            <h4 className="text-[#161616] font-inter text-4xl font-semibold my-3">
              {vanData.name}
            </h4>
            <div className="text-[#161616] font-inter text-xl font-semibold my-2">
              {" "}
              ${vanData.price}{" "}
              <span className="text-[#161616] font-inter text-sm font-medium">
                /day
              </span>{" "}
            </div>
            <p className="font-inter text-md font-medium text-[#161616] my-4">
              {vanData.description}
            </p>
            <div className="text-center font-inter text-md font-semibold capitalize text-[#FFF] px-6 py-2 bg-[#FF8C38] rounded-lg lg:max-w-[300px]">
              Rent this Van
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="bg-[#FFF7ED] flex justify-center items-start px-6 sm:px-16 min-h-[100vh]">
      <Suspense fallback={<h2>Loading ....</h2>}>
        <Await resolve = {vansPromise}>
          {renderData}
        </Await>
      </Suspense>
    </div>
  );
}

export default VansDetailed;
