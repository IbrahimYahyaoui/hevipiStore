import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { BagContext } from "../Contexts/bagContext";
const ProductComp = ({ product }) => {
  const { name, images, price, categories, isAvailable, _id } = product;
  const { dispatch } = useContext(BagContext);
  const handleAddToBag = () => {
    // Add logic to handle adding the product to the shopping bag
    console.log("Product added to bag:", product);
    dispatch({ type: "ADD_TO_BAG", payload: product });
  };

  return (
    <Link
      to={`/info/${_id}`}
      className="max-w-md rounded overflow-hidden border-2 p-2"
    >
      <div className="relative">
        <img src={images[0]} alt={name} className="w-full  object-cover z-10" />
        {!isAvailable && (
          <div className="absolute top-0 right-0 mt-2 mr-2 bg-red-500 text-white px-2 py-1 rounded">
            Sold Out
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-xl font-semibold text-right">
          {price} DT
        </p>
        <div className="mt-2">
          {categories.map((category, index) => (
            <span
              key={index}
              className="inline-block bg-gray-200 text-gray-700 text-sm px-2 py-1 rounded-full mr-2"
            >
              {category}
            </span>
          ))}
        </div>
        <button
          disabled={!isAvailable}
          className={`mt-4 ${
            !isAvailable
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-black hover:scale-105"
          } text-white font-bold py-2 px-4 rounded w-full`}
          onClick={handleAddToBag}
        >
          Add to Bag
        </button>
      </div>
    </Link>
  );
};

export default ProductComp;
