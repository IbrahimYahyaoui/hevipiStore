import React from "react";
import bg from "../assets/bg.png";
const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="rounded-lg overflow-hidden  p-5 lg:px-20 pt-2">
        <img src={bg} alt="bg" className=" "></img>
      </div>
      <h1>Product</h1>
    </div>
  );
};

export default Home;
