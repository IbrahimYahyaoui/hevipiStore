import React from "react";
import ig from "../assets/ig.png";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
const Contact = () => {
  return (
    <div className=" pt-20 lg:w-96  m-auto flex flex-col justify-center">
      <p className="text-center">
        Thank you for visiting our website! We value your feedback, inquiries,
        and suggestions. If you have any questions, need assistance, or would
        like to collaborate with us, please don't hesitate to reach out.
      </p>
      <p className="flex items-center cursor-pointer mt-5">
        <img src={ig} alt="instagram" className="w-20"></img>
        hevipi
        <ArrowTopRightOnSquareIcon className="w-4 ml-2" />
      </p>
    </div>
  );
};

export default Contact;
