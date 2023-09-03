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

      <div className="p-2  flex flex-col items-center  w-full justify-between h-full ">
        <div className="font-bold text-xs mb-4 flex-1  text-center uppercase resize-both ">
          {name}
        </div>
        <div className="flex w-full items-center justify-between ">
          <p className="text-gray-700 text-base font-semibold text-right w-1/3 items-start ">
            {price} DT
          </p>
          <div className="">
            {categories.map((category, index) => (
              <span
                key={index}
                className="inline-block bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full text-center "
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
