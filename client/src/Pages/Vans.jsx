import { useEffect, useState } from "react";
import { Link, useLoaderData, useSearchParams } from "react-router-dom";
import Buttons from "./components/Buttons";
import Card from "./components/Card";
import { requireAuth } from "../utils";

const getVansData = async () => {
  let response; // Declare response outside the try block
  try {
    response = await fetch("https://vanlife-backend.onrender.com/api/vans");
    if (response.ok) {
      const res = await response.json();
      return res.vans;
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

export async function loader() {
  await requireAuth()
  return getVansData();
}

const idx = (type) => {
  if (type === "simple") return 0;
  if (type === "luxury") return 1;
  if (type === "rugged") return 2;
};

const initialFilters = [
  { id: "simple", isActive: false },
  { id: "luxury", isActive: false },
  { id: "rugged", isActive: false },
];

function Vans() {
  const allData = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilters = searchParams.get("type")?.split(",") || []; // Extract multiple filters
  const [isActive, setIsActive] = useState(initialFilters);
  const displayedVans =
    typeFilters.length > 0
      ? allData.filter((c) => typeFilters.includes(c.type.toLowerCase()))
      : allData;
  useEffect(() => {
    localStorage.clear("filterStates")
  },[])
  return (
    <div className="bg-[#FFF7ED] flex justify-center items-start px-6 sm:px-16 min-h-[100vh]">
      <div className="w-full xl:max-w-[1280px]">
        <h2 className="text-[#161616] font-inter text-2xl font-bold mt-4">
          Explore our van options
        </h2>
        <div id="filters" className="flex justify-between mt-6">
          <div className="w-full flex flex-col gap-6 xs:flex-row">
            <div className="flex justify-between gap-6">
              <Buttons
                name={"Simple"}
                id={"simple"}
                activeColor={"#E17654"}
                isActive={isActive}
                setIsActive={setIsActive}
                setSearchParams={setSearchParams}
              />
              <Buttons
                name={"Luxury"}
                id={"luxury"}
                activeColor={"#161616"}
                isActive={isActive}
                setIsActive={setIsActive}
                setSearchParams={setSearchParams}
              />
            </div>
            <div className="flex justify-between">
              <Buttons
                name={"Rugged"}
                id={"rugged"}
                activeColor={"#115e59"}
                isActive={isActive}
                setIsActive={setIsActive}
                setSearchParams={setSearchParams}
              />
              {typeFilters && (
                <button
                  onClick={() => {
                    setIsActive(initialFilters);
                    setSearchParams({});
                  }}
                  to=""
                  className="max-w-[90px] xs:hidden"
                >
                  <div className="underline text-#[161616]">Clear Filters</div>
                </button>
              )}
            </div>
            {typeFilters && (
              <button
                onClick={() => {
                  setIsActive(initialFilters);
                  setSearchParams({});
                }}
                to="."
                className="max-w-[90px] hidden xs:block ml-auto"
              >
                <div className="underline text-#[161616]">Clear Filters</div>
              </button>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-8 gap-8">
          {displayedVans.map((obj) => {
            return <Card {...obj} key={obj.id} searchParams={searchParams} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Vans;
