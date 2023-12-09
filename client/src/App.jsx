import {
  Route,
  RouterProvider,
  createHashRouter,
  createRoutesFromElements,
} from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import HostLayout from "./Pages/HostLayout";
import Login from "./Pages/Login";
import Vans, { loader as vansLoader } from "./Pages/Vans";
import VansDetailed, {
  loader as vansDetailedLoader,
} from "./Pages/VansDetailed";
import Dashboard, {
  loader as dashboardLoader,
} from "./Pages/components/Dashboard";
import Error from "./Pages/components/Error";
import Income, { loader as incomeLoader } from "./Pages/components/Income";
import Layout from "./Pages/components/Layout";
import ListedVanDetails, {
  loader as listedVanDetailsLoader,
} from "./Pages/components/ListedVanDetails";
import ListedVans, {
  loader as listedVansLoader,
} from "./Pages/components/ListedVans";
import ListedVansDetails, {
  loader as listedVansDetailsLoader,
} from "./Pages/components/ListedVansDetails";
import ListedVansPhotos, {
  loader as listedVansPhotosLoader,
} from "./Pages/components/ListedVansPhotos";
import ListedVansPricing, {
  loader as listedVansPricingLoader,
} from "./Pages/components/ListedVansPricing";
import NotFound from "./Pages/components/NotFound";
import Reviews, { loader as reviewsLoader } from "./Pages/components/Reviews";

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      {/* Path that starts with '/' is absolute path  */}
      {/* Path that starts with name is reative to its parent */}
      <Route index element={<Home />} />
      <Route path="host" element={<HostLayout />}>
        <Route index element={<Dashboard />} loader={dashboardLoader} />
        <Route path="income" element={<Income />} loader={incomeLoader} />
        <Route path="vans" element={<ListedVans />} loader={listedVansLoader} />
        <Route
          path="vans/:id"
          element={<ListedVansDetails/>} loader={listedVansDetailsLoader}
        >
          <Route
            index
            element={<ListedVanDetails />}
            loader={listedVanDetailsLoader}
          />
          <Route
            path="pricing"
            element={<ListedVansPricing />}
            loader={listedVansPricingLoader}
          />
          <Route
            path="photos"
            element={<ListedVansPhotos />}
            loader={listedVansPhotosLoader}
          />
        </Route>
        <Route path="reviews" element={<Reviews />} loader={reviewsLoader} />
      </Route>
      <Route path="about" element={<About />} />
      {/* Since There is no Shared layout bw Vans and VansDetailed We dont need to make a hole */}
      <Route
        path="vans"
        element={<Vans />}
        loader={vansLoader}
        errorElement={<Error />}
      />
      <Route
        path="vans/:id"
        element={<VansDetailed />}
        loader={vansDetailedLoader}
        errorElement={<Error />}
      />
      <Route path="login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
