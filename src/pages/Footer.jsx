import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
const Footer = () => {
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
    <div className="p-4 border-t border-2 flex flex-col justify-center w-full">
      <h3 className="text-lg font-semibold mb-2 text-center">
        Subscribe to our email
      </h3>
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
            <ArrowRightIcon className="w-4" />
          )}
        </button>
      </form>
    </div>
  );
};

export default Footer;
