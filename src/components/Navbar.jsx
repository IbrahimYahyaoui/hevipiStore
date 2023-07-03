import React, { useState, useContext } from "react";
import {
  Bars3Icon,
  ShoppingBagIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@heroicons/react/20/solid";
import { useCategories } from "../hooks/useCategories";

import { Link } from "react-router-dom";
import { BagContext } from "../Contexts/bagContext";
import logo from "../assets/logo.png";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { Disclosure, Transition } from "@headlessui/react";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { categories, getAllCategories } = useCategories();
  const { items } = useContext(BagContext);
  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <nav className="flex items-center justify-between lg:justify-between p-4 border-b-2 Z-TOP">
      <div className="flex md:hidden items-center">
        <button
          className="text-gray-500 hover:text-gray-700 focus:outline-none"
          onClick={handleDrawerToggle}
        >
          <Bars3Icon className="w-6 h-6" />
        </button>
      </div>
      <Link to="/" className="flex items-center">
        <img src={logo} alt="Logo" className="w-8 h-8" />
      </Link>
      <ul className="p-4 lg:flex hidden ">
        <li>
          <Link to="/" href="#">
            Home
          </Link>
        </li>
        <div className="flex mx-3">
          <div className="relative">
            <Menu
              menuButton={
                <MenuButton className="flex align items-center">
                  Collections <ChevronDownIcon className="w-4" />
                </MenuButton>
              }
            >
              {categories &&
                categories.map((cat) => {
                  return (
                    <Link to={`/collections/${cat.name}`}>
                      <MenuItem key={cat._id}>
                        <p>{cat.name}</p>
                      </MenuItem>
                    </Link>
                  );
                })}
            </Menu>
          </div>
        </div>
        <li>
          <Link to="/contact" href="#">
            Contact
          </Link>
        </li>
      </ul>
      <Link
        to="/bag"
        className="items-center space-x-4 border-black border-2 flex p-2 border-opacity-30 rounded"
      >
        <ShoppingBagIcon className="w-6 h-6 text-gray-500 hover:text-gray-700 " />
        <p>
          {" "}
          {items &&
            items.reduce((acc, item) => acc + item.price * item.qty, 0)}{" "}
          DT
        </p>
      </Link>
      {/*  */}
      {isDrawerOpen && (
        <div className="fixed inset-0 flex">
          <div className=" top-0 left-0 w-64 h-screen bg-white">
            <ul className="p-4">
              <li>
                <Link to="/" href="#" onClick={handleDrawerToggle}>
                  Home
                </Link>
              </li>
              <li>
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex items-center">
                        Collections
                        <ChevronRightIcon
                          className={
                            open ? "rotate-90 transform w-4 ml-2" : "w-4 ml-2"
                          }
                        />
                      </Disclosure.Button>

                      <Transition
                        show={open}
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                      >
                        <Disclosure.Panel static className="p-4">
                          {categories &&
                            categories.map((cat) => {
                              return (
                                <Link
                                  key={cat._id}
                                  to={`/collections/${cat.name}`}
                                  onClick={handleDrawerToggle}
                                  className="py-4"
                                >
                                  <p>{cat.name}</p>
                                </Link>
                              );
                            })}
                        </Disclosure.Panel>
                      </Transition>
                    </>
                  )}
                </Disclosure>
              </li>
              <li>
                <Link to="/contact" href="#" onClick={handleDrawerToggle}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div
            className="bg-black opacity-50 h-screen w-1/2 right-0"
            onClick={handleDrawerToggle}
          ></div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
