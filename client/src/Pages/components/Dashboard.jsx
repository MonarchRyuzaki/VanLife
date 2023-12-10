import React from "react";
import { BsStarFill } from "react-icons/bs";
import { Await, Link, defer, useLoaderData } from "react-router-dom";
import { requireAuth } from "../../utils";

const getHostVans = async () => {
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
  return defer({ vans: getHostVans() });
}

function Dashboard() {
  const loaderData = useLoaderData();

  function renderVanElements(vans) {
    const hostVansEls = vans.map((van) => (
      <div className="host-van-single" key={van.id}>
        <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
        <div className="host-van-info">
          <h3>{van.name}</h3>
          <p>${van.price}/day</p>
        </div>
        <Link to={`vans/${van.id}`}>View</Link>
      </div>
    ));

    return (
      <div className="host-vans-list">
        <section>{hostVansEls}</section>
      </div>
    );
  }
  return (
    <div className="bg-[#FFF7ED] flex justify-center items-start px-6 sm:px-16 min-h-[100vh]">
      <div className="w-full xl:max-w-[1280px] mt-[150px]">
        <section className="host-dashboard-earnings">
          <div className="info">
            <h1>Welcome!</h1>
            <p>
              Income last <span>30 days</span>
            </p>
            <h2>$2,260</h2>
          </div>
          <Link to="income">Details</Link>
        </section>
        <section className="host-dashboard-reviews">
          <h2>Review score</h2>
          <BsStarFill className="star" />
          <p>
            <span>5.0</span>/5
          </p>
          <Link to="reviews">Details</Link>
        </section>
        <section className="host-dashboard-vans">
          <div className="top">
            <h2>Your listed vans</h2>
            <Link to="vans">View all</Link>
          </div>
          <React.Suspense fallback={<h3>Loading...</h3>}>
            <Await resolve={loaderData.vans}>{renderVanElements}</Await>
          </React.Suspense>
        </section>
      </div>
    </div>
  );
}

export default Dashboard;
