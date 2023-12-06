import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Vans from "./Pages/Vans"

function App() {
  return (
    <BrowserRouter>
      <div className="w-full overflow-hidden">
        <nav className="bg-[#FFF7ED] flex justify-center items-center px-6 sm:px-16">
          <div className="w-full xl:max-w-[1280px] flex justify-between items-center py-4">
            <Link to="/" className="font-inter font-extrabold text-[26px] leading-[40px]" element = {<Home />}>#VANLIFE</Link>
            <div>
              <Link to="/about" className="font-inter font-semibold text-[16px] leading-[22.92px] mr-4 md:mr-8 hover:underline" element = {<About />}>About</Link>
              <Link to="/Vans" className="font-inter font-semibold text-[16px] leading-[22.92px] hover:underline" element = {<Vans />}>Vans</Link>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Vans" element={<Vans />} />
        </Routes>
        <footer className="bg-[#252525] flex justify-center items-center">
          <div className="font-inter font-medium text-[#AAAAAA] py-6">Ⓒ 2022 #VANLIFE</div>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App