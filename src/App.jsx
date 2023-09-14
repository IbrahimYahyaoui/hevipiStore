import {
  Link,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  useLocation,
} from "react-router-dom";

import RootLayouts from "./Layouts/RootLayouts";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import ProductInfo from "./pages/ProductsInfo";
import Bag from "./pages/Bag";
import Contact from "./pages/Contact";
import { Toaster } from "react-hot-toast";
import Checkout from "./pages/Checkout";

import { Analytics } from "@vercel/analytics/react";
import mixpanel from "mixpanel-browser";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayouts />}>
      <Route path="/" element={<Home />}></Route>
      <Route path="/info/:id" element={<ProductInfo />}></Route>
      <Route path="/collections/:id" element={<Collection />}></Route>
      <Route path="/bag" element={<Bag />}></Route>
      <Route path="/Checkout" element={<Checkout />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
    </Route>
  )
);
function App() {
  mixpanel.init(import.meta.env.VITE_ANALYTICS_TOKEN, {
    debug: true,
    track_pageview: true,
    persistence: "localStorage",
  });

  return (
    <>
      <Analytics />
      <Toaster />
      <p className="">
        <RouterProvider router={router} />
      </p>
    </>
  );
}

export default App;
