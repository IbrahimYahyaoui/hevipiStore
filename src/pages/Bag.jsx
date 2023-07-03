import React, { useContext } from "react";
import { BagContext } from "../Contexts/bagContext";
import { Link } from "react-router-dom";

const Bag = () => {
  const { items, dispatch } = useContext(BagContext);

  const handleIncreaseQty = (itemId) => {
    dispatch({ type: "INCREASE_QTY", payload: itemId });
  };

  const handleDecreaseQty = (itemId) => {
    dispatch({ type: "DECREASE_QTY", payload: itemId });
  };

  const handleRemoveProduct = (itemId) => {
    dispatch({ type: "REMOVE_PRODUCT", payload: itemId });
  };

  return (
    <div className="">
      {items.map((item) => (
        <div
          key={item._id}
          className="flex flex-wrap items-center border-2 rounded-md mb-4 m-3"
        >
          <img
            src={item.images[item.selectedImageIndex]}
            alt={item.name}
            className="h-10 mr-2 mb-2"
          />
          <div className="flex flex-col flex-grow mb-2">
            <h3>{item.name}</h3>
            <div className="flex items-center">
              <p className="mr-2">Price: {item.price} DT</p>
            </div>
          </div>
          <div className="ml-auto flex">
            <div className="flex border-2 border-black">
              <button
                className="border-r-2 border-black px-2 mx-1"
                onClick={() => handleDecreaseQty(item._id)}
              >
                -
              </button>
              <p className="mr-2"> {item.qty}</p>
              <button
                className=" border-l-2 border-black px-2 mx-1"
                onClick={() => handleIncreaseQty(item._id)}
              >
                +
              </button>
            </div>
            <button
              className="border-2 border-black px-2 mx-1"
              onClick={() => handleRemoveProduct(item._id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <div className="pt-20   flex justify-end w-full border  bg-black fixed bottom-0">
        {items.length > 0 && (
          <div className="checkout fixed bottom-0 flex items-center  right-0 p-3   ">
            <p className="text-lg lg:text-2xl text-white">
              Total Price:{" "}
              {items.reduce((acc, item) => acc + item.price * item.qty, 0)} DT
            </p>
            <Link
              to="/Checkout"
              className="bg-white text-black p-2 rounded ml-2 "
            >
              Proceed to Checkout
            </Link>
          </div>
        )}
      </div>
      {items.length === 0 && <p>Your bag is empty.</p>}
    </div>
  );
};

export default Bag;
