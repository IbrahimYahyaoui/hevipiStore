import React, { useContext, useState } from "react";
import { BagContext } from "../Contexts/bagContext";
import { toast } from "react-hot-toast";
import { useBag } from "../hooks/UseBag";
const Checkout = () => {
  const { sendBagToConfirmation } = useBag();
  const [Username, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const { items } = useContext(BagContext);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleCheckout = () => {
    if (Username === "" || phone === "") {
      toast.error("Please fill in the required fields.");
    } else {
      sendBagToConfirmation(items, Username, phone, description);
    }
  };

  return (
    <div className="mb-28">
      <div className="m-3 ">
        <h2 className="text-2xl font-bold mb-4">Checkout</h2>
        <div className="   ">
          <label htmlFor="name" className="block font-semibold mb-2">
            Name:*
          </label>
          <input
            type="text"
            id="name"
            value={Username}
            onChange={handleNameChange}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block font-semibold mb-2">
            Phone:*
          </label>
          <input
            type="number"
            id="phone"
            value={phone}
            onChange={handlePhoneChange}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block font-semibold mb-2">
            Description:
          </label>
          <textarea
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            rows={4}
          />
        </div>
        <h3 className="text-lg font-semibold mb-2">Bag Contents:</h3>
        {items.map((item) => (
          <div key={item._id} className="flex items-center mb-4">
            <img
              src={item.images[0]}
              alt={item.name}
              className="w-20 h-20 mr-4"
            />
            <div>
              <p className="font-semibold">{item.name}</p>
              <p>Quantity: {item.qty}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="pt-20   flex justify-end bg-black w-full fixed bottom-0">
        {items.length > 0 && (
          <div className="checkout fixed bottom-0 flex items-center  right-0 p-3  ">
            <p className="text-lg lg:text-2xl text-white">
              Total Price:{" "}
              {items.reduce((acc, item) => acc + item.price * item.qty, 0)} DT
            </p>
            <button
              onClick={handleCheckout}
              className="bg-white text-black p-2 rounded ml-2 w-50"
            >
              send to Confirmation
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
