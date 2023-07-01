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
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayouts />}>
      <Route path="/Home" element={<Home />}></Route>
      <Route path="/info/:id" element={<ProductInfo />}></Route>
      <Route path="/collections/:id" element={<Collection />}></Route>
      <Route path="/bag" element={<Bag />}></Route>
    </Route>
  )
);
function App() {
  return (
    <>
      <p className="">
        <RouterProvider router={router} />
      </p>
    </>
  );
}

export default App;
