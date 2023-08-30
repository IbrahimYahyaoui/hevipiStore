import {
  Link,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
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
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayouts />}>
      <Route path="/*" element={<p>404</p>}></Route>
    </Route>
    // <Route path="/" element={<RootLayouts />}>
    //   <Route path="/" element={<Home />}></Route>
    //   <Route path="/info/:id" element={<ProductInfo />}></Route>
    //   <Route path="/collections/:id" element={<Collection />}></Route>
    //   <Route path="/bag" element={<Bag />}></Route>
    //   <Route path="/Checkout" element={<Checkout />}></Route>
    //   <Route path="/contact" element={<Contact />}></Route>
    // </Route>
  )
);
function App() {
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
