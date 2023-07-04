import axios from "axios";

export const useBag = () => {
  const sendBagToConfirmation = (items) => {
    const orderDetails = items.map((item) => {
      const { name, qty, selectedOptions } = item;
      return {
        name,
        quantity: qty,
        options: selectedOptions,
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
      .post(`${import.meta.env.VITE_URL_prod}/item/AddOrder`, orderDetails)
      .then((response) => {
        // Check the response status
        if (response.status === 201) {
          // Order sent successfully
          toast.success("Order sent successfully!");
        } else {
          // Failed to send the order
          toast.error("Failed to send the order. Please try again.");
        }
      })
      .catch((error) => {
        // Error occurred while sending the order
        console.error("Error sending the order:", error);
        toast.error("An error occurred while sending the order.");
      });
  };

  return { sendBagToConfirmation };
};
