import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const RootLayouts = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default RootLayouts;
