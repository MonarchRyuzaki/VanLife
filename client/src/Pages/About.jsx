import { Link } from "react-router-dom";
import aboutBg from "../assets/aboutBg.png";

function About() {
  return (
    <div>
      <div className="bg-[#FFF7ED] flex justify-center items-center">
        <img src={aboutBg} alt="" className=" bg-[#FFF7ED]" />
      </div>
      <div className="bg-[#FFF7ED] min-h-[70vh] px-6 sm:px-16 flex justify-center items-start">
        <div className="w-full xl:max-w-[1280px] py-12">
          <div className="my-6">
            <h2 className="text-[#161616] font-inter text-3xl font-bold my-8">
              Don’t squeeze in a sedan when you could relax in a van.
            </h2>
            <p className="my-8 text-[#161616] font-inter font-medium">
              Our mission is to enliven your road trip with the perfect travel
              van rental. Our vans are recertified before each trip to ensure
              your travel plans can go off without a hitch. (Hitch costs extra
              😉)
            </p>
            <p className="my-8 text-[#161616] font-inter font-medium">
              Our team is full of vanlife enthusiasts who know firsthand the
              magic of touring the world on 4 wheels.
            </p>
          </div>
          <div className="bg-[#FFCC8D] px-8 py-12 w-full flex flex-col justify-between gap-12 my-12">
            <h3 className="text-[#161616] text-2xl font-bold">
              Your destination is waiting. <br />
              Your van is ready.
            </h3>
            <Link
              to="../vans"
              className="font-inter font-bold bg-[#161616] text-white px-16 py-3 text-center rounded-lg max-w-[350px]"
            >
              Explore our Vans
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
