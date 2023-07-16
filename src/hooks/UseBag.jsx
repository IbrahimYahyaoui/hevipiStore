import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";

export const useBag = () => {
  const [isLoading, setIsLoading] = useState(false);

  const sendBagToConfirmation = async (
    items,
    Username,
    phone,
    description,
    address
  ) => {
    const orderDetails = items.map((item) => {
      const { name, qty, selectedOptions, images } = item;
      return {
        name,
        quantity: qty,
        options: selectedOptions,
        image: images[0],
      };
    });

    // Calculate the total price
    const totalPrice = items.reduce(
      (acc, item) => acc + item.price * item.qty,
      0
    );

    // Add the total price and customer details to the order details
    orderDetails.push({
      totalPrice,
      customer: {
        Username,
        phone,
        address, // Add address to the order details
        description,
      },
    });

    try {
      setIsLoading(true);
      const response = await axios.post(
        `${import.meta.env.VITE_URL_prod}/item/AddOrder`,
        {
          orderDetails: JSON.stringify(orderDetails),
        }
      );

      // Check the response status
      toast.success("Order sent successfully!");
    } catch (error) {
      // Error occurred while sending the order
      console.error("Error sending the order:", error);
      toast.error("An error occurred while sending the order.");
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, sendBagToConfirmation };
};
