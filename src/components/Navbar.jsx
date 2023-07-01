import React, { useContext, useEffect } from "react";
import logo from "../assets/logo.png";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { useCategories } from "../hooks/useCategories";

import { Link } from "react-router-dom";
import { BagContext } from "../Contexts/bagContext";

const Navbar = () => {
  const { categories, getAllCategories } = useCategories();
  const { items } = useContext(BagContext);

  return (
    <div className="z-50">
      <div className="drawer ">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar  flex justify-between items-center border-b-2">
            <div className=" lg:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className=" px-2 mx-2">
              <img src={logo} alt="hevipi" className="h-8 ml-5"></img>
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <details>
                    <summary>Collection</summary>
                    <ul className="p-2 bg-base-100">
                      {categories &&
                        categories.map((cat) => {
                          return (
                            <li key={cat._id}>
                              <Link to={`/collections/${cat.name}`}>
                                {cat.name}
                              </Link>
                            </li>
                          );
                        })}
                    </ul>
                  </details>
                </li>
                <li>
                  <a>Contact</a>
                </li>
              </ul>
            </div>
            <Link
              to="/bag"
              className=" border-2 border-black rounded-md   py-2 px-4 cursor-pointer "
            >
              <ShoppingBagIcon className="h-4 mr-2" />
              <p>
                {" "}
                {items &&
                  items.reduce(
                    (acc, item) => acc + item.price * item.qty,
                    0
                  )}{" "}
                DT
              </p>
            </Link>
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200">
            {/* Sidebar content here */}
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <details>
                <summary>collections</summary>
                <ul className=" p-2 bg-base-100">
                  {categories &&
                    categories.map((cat) => {
                      return (
                        <li key={cat._id}>
                          <Link to={`/collections/${cat.name}`}>
                            {cat.name}
                          </Link>
                        </li>
                      );
                    })}
                </ul>
              </details>
            </li>
            <li className="">
              <a>contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
