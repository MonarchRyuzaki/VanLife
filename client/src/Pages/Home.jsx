import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-home min-h-[100vh] flex justify-center items-center px-6 sm:px-16">
      <div className="w-full xl:max-w-[1280px]">
        <section id="home">
          <div className="flex flex-col gap-10 md:gap-20 my-8">
            <h1 className="font-inter font-semibold text-6xl text-white leading-[80px]">
              You got the travel plans, we got the travel vans.
            </h1>
            <p className="font-inter font-medium text-2xl text-white">
              Add adventure to your life by joining the #vanlife movement. Rent
              the perfect van to make your perfect road trip.
            </p>
            <Link
              to="vans"
              className="font-inter font-bold bg-[#FF8C38] text-white px-16 py-3 text-center md:max-w-[400px]"
            >
              Find your van
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
