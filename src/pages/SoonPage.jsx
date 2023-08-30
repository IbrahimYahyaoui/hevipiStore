import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import logo from "../assets/logo.png";
const SoonPage = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setIsLoading(true);
      const response = await axios.post(
        `${import.meta.env.VITE_URL_prod}/item/addMail`,
        { email }
      );

      toast.success("Email sent successfully!");
    } catch (error) {
      toast.error("Failed to send email:");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-4  flex flex-col justify-center items-center w-full">
      <img src={logo} className="w-20 my-8"></img>
      <form onSubmit={handleSubmit} className="flex w-full justify-center">
        <input
          type="email"
          value={email}
          onChange={handleInputChange}
          placeholder="Email"
          className="p-2 border rounded-l focus:outline-none"
        />
        <button
          type="submit"
          className="bg-black text-white p-2 rounded-r hover:bg-black"
          disabled={isLoading}
        >
          {isLoading ? (
            <span className="loading loading-spinner loading-md"></span>
          ) : (
            <p>notify me</p>
          )}
        </button>
      </form>
      <h3 className=" font-semibold mb-2 text-center">
        We will get in touch with you as soon as the store becomes available
        once again.{" "}
      </h3>
    </div>
  );
};

export default SoonPage;
