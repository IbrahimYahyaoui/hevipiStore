import React, { useEffect } from "react";
import bg from "../assets/bg.png";
import { useCategories } from "../hooks/useCategories";
import { Link } from "react-router-dom";
import { useProduct } from "../hooks/useProduct";
import ProductComp from "../components/ProductComp";

const Home = () => {
  const { products, isLoading } = useProduct();

  const reversedProducts = products ? products.slice().reverse() : [];

  return (
    <div className="m-6">
      {/* <h1 className="text-3xl text-center w-full mb-2">our Collection</h1> */}
      {isLoading ? (
        <div className="grid place-content-center pt-52">
          <span className="loading loading-spinner loading-md">a</span>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {reversedProducts.map((prd) => (
            <ProductComp product={prd} key={prd._id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
