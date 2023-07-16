import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { BagContext } from "../Contexts/bagContext";

const ProductComp = ({ product }) => {
  const { name, images, price, categories, isAvailable, _id } = product;
  const { dispatch } = useContext(BagContext);

  return (
    <Link
      to={`/info/${_id}`}
      className="max-w-md rounded overflow-hidden border-2  flex flex-col relative"
    >
      <img src={images[0]} alt={name} className="w-full object-cover" />
      {!isAvailable && (
        <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded z-10">
          Sold Out
        </div>
      )}

      <div className="p-4 flex flex-col items-center  justify-between h-full">
        <div className="font-bold text-xs mb-4 flex-1  whitespace-nowrap ">
          {name}
        </div>
        <div className="flex w-full items-center justify-between">
          <p className="text-gray-700 text-xl font-semibold text-right w-1/2 ">
            {price} DT
          </p>
          <div className="">
            {categories.map((category, index) => (
              <span
                key={index}
                className="inline-block bg-gray-200 text-gray-700 text-sm px-2 py-1 rounded-full "
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductComp;
