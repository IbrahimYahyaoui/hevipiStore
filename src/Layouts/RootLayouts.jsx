import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import SoonPage from "../pages/SoonPage";

const RootLayouts = () => {
  return (
    <div>
      {/* <Navbar />
      <Outlet /> */}
      <SoonPage />
    </div>
  );
};

export default RootLayouts;
