import { useEffect, useState } from "react";
import Buttons from "./components/Buttons";
import Card from "./components/Card";

const idx = (type) => {
  if (type === "simple") return 0;
  if (type === "luxury") return 1;
  if (type === "rugged") return 2;
};

function Vans() {
  const initialFilters = [
    { id: "simple", isActive: false },
    { id: "luxury", isActive: false },
    { id: "rugged", isActive: false },
  ];
  const [isActive, setIsActive] = useState(initialFilters);
  const [filter, setIsFilter] = useState({
    simple: false,
    luxury: false,
    rugged: false,
  });
  const [allData, setAllData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/vans");
      if (response.ok) {
        const result = await response.json();
        setAllData(result.vans);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const willShow = (type) => {
    if (
      isActive[idx(type)].isActive === true ||
      (isActive[0].isActive === isActive[1].isActive &&
        isActive[1].isActive === isActive[2].isActive)
    )
      return true;
  };
  const clearFilters = () => setIsActive(initialFilters);
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
                setIsFilter={setIsFilter}
              />
              <Buttons
                name={"Luxury"}
                id={"luxury"}
                activeColor={"#161616"}
                isActive={isActive}
                setIsActive={setIsActive}
                setIsFilter={setIsFilter}
              />
            </div>
            <div className="flex justify-between">
              <Buttons
                name={"Rugged"}
                id={"rugged"}
                activeColor={"#115e59"}
                isActive={isActive}
                setIsActive={setIsActive}
                setIsFilter={setIsFilter}
              />
              <button className="max-w-[90px] xs:hidden" onClick={clearFilters}>
                <div className="underline text-#[161616]">Clear Filters</div>
              </button>
            </div>
            <button
              className="max-w-[90px] hidden xs:block ml-auto"
              onClick={clearFilters}
            >
              <div className="underline text-#[161616]">Clear Filters</div>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-8 gap-8">
          {allData.map((obj) => {
            if (willShow(obj.type)) return <Card {...obj} key={obj.id} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Vans;
