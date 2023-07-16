import React, { useEffect } from "react";

import { useProduct } from "../hooks/useProduct";
import ProductComp from "../components/ProductComp";
import Footer from "./Footer";

const Home = () => {
  const { products, isLoading } = useProduct();

  const reversedProducts = products ? products.slice().reverse() : [];

  return (
    <div className="flex flex-col h-full justify-between">
      <div className="m-2">
        {/* <h1 className="text-3xl text-center w-full mb-2">our Collection</h1> */}
        {isLoading ? (
          <div className="grid place-content-center pt-52">
            <span className="loading loading-spinner loading-md">a</span>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {reversedProducts.map((prd) => (
                <ProductComp product={prd} key={prd._id} />
              ))}
            </div>
          </>
        )}
      </div>
      {!isLoading && (
        <div className="">
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Home;
