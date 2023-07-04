import axios from "axios";
import { toast } from "react-hot-toast";

export const useBag = () => {
  const sendBagToConfirmation = (items, Username, phone, description) => {
    const orderDetails = items.map((item) => {
      console.log(item);
      const { name, qty, selectedOptions, images } = item;
      return {
        name,
        quantity: qty,
        options: selectedOptions,
        image: images[0],
        Username,
        phone,
        description,
      };
    });

    // Calculate the total price
    const totalPrice = items.reduce(
      (acc, item) => acc + item.price * item.qty,
      0
    );

    // Add the total price to the order details
    orderDetails.push({ totalPrice });
    console.log(orderDetails);
    // Send the orderDetails to the server using a POST request
    axios
      .post(`${import.meta.env.VITE_URL_prod}/item/AddOrder`, {
        orderDetails: JSON.stringify(orderDetails),
      })
      .then((response) => {
        // Check the response status
        toast.success("Order sent successfully!");
      })
      .catch((error) => {
        // Error occurred while sending the order
        console.error("Error sending the order:", error);
        toast.error("An error occurred while sending the order.");
      });
  };

  return { sendBagToConfirmation };
};
