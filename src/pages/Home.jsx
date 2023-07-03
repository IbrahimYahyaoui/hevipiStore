import React, { useEffect } from "react";
import bg from "../assets/bg.png";
import { useCategories } from "../hooks/useCategories";
import { Link } from "react-router-dom";

const Home = () => {
  const { categories, isLoading } = useCategories();

  return (
    <div className="flex flex-col items-center">
      <div className="rounded-lg overflow-hidden p-5 lg:px-20 pt-2">
        <img src={bg} alt="bg" className="" />
      </div>
      <h1 className="text-2xl font-bold my-4">Our Collection</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="flex flex-wrap justify-center">
          {categories &&
            categories.map((category) => (
              <Link
                to={`/collections/${category.name}`}
                key={category._id}
                className="max-w-sm rounded overflow-hidden shadow-lg m-2 cursor-pointer"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-40 object-cover"
                />
                <div className="px-6 py-4">
                  <p className="text-xl  mb-2">{category.name}</p>
                </div>
              </Link>
            ))}
        </div>
      )}
    </div>
  );
};

export default Home;
