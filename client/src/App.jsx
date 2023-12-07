import {
  BrowserRouter,
  HashRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import HostLayout from "./Pages/HostLayout";
import Vans from "./Pages/Vans";
import VansDetailed from "./Pages/VansDetailed";
import Dashboard from "./Pages/components/Dashboard";
import Income from "./Pages/components/Income";
import Layout from "./Pages/components/Layout";
import Reviews from "./Pages/components/Reviews";
import ListedVans from "./Pages/components/ListedVans";
import ListedVansDetails from "./Pages/components/ListedVansDetails";
import ListedVanDetails from "./Pages/components/ListedVanDetails";
import ListedVansPricing from "./Pages/components/ListedVansPricing";
import ListedVansPhotos from "./Pages/components/ListedVansPhotos";

function App() {
  return (
    <HashRouter>
      <div className="w-full overflow-hidden">
        {/* Path that starts with '/' is absolute path  */}
        {/* Path that starts with name is reative to its parent */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="vans" element={<ListedVans />} />
              <Route path="vans/:id" element={<ListedVansDetails />}>
                <Route index element={<ListedVanDetails />}/>
                <Route path="pricing" element={<ListedVansPricing />}/>
                <Route path="photos" element={<ListedVansPhotos />}/>
              </Route>
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="about" element={<About />} />
            {/* Since There is no Shared layout bw Vans and VansDetailed We dont need to make a hole */}
            <Route path="vans" element={<Vans />} />
            <Route path="vans/:id" element={<VansDetailed />} />
          </Route>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
