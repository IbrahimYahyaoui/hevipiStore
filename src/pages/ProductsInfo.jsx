import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "../hooks/useProduct";
import { BagContext } from "../Contexts/bagContext";
import { toast } from "react-hot-toast";
import Footer from "../components/footer";

const ProductInfo = () => {
  const { id } = useParams();
  const { dispatch } = useContext(BagContext);
  const { products } = useProduct();
  const [product, setProduct] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState({});

  useEffect(() => {
    if (products && products.length > 0) {
      const selectedProduct = products.find((p) => p._id === id);
      setProduct({ ...selectedProduct, selectedImageIndex: 0 });
    }
  }, [products, id]);

  const handleThumbnailClick = (index) => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      selectedImageIndex: index,
    }));
  };

  const handleOptionClick = (optionGroup, option) => {
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [optionGroup]: option,
    }));
  };

  const handleAddToBag = () => {
    if (!isOptionsFilled()) {
      toast.error("Please select all options");
      return;
    }

    const productToAdd = {
      ...product,
      selectedOptions: selectedOptions,
    };

    dispatch({ type: "ADD_PRODUCT", payload: productToAdd });
  };

  const isOptionsFilled = () => {
    if (product.option1 != "" && !selectedOptions.option1) {
      return false;
    }

    if (product.option2 != "" && !selectedOptions.option2) {
      return false;
    }

    if (product.option3 != "" && !selectedOptions.option3) {
      return false;
    }

    return true;
  };

  return (
    <>
      <div className="m-6">
        {product ? (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="md:col-span-1 mt-6">
                <img
                  src={product.images[product.selectedImageIndex]}
                  alt={product.name}
                  className="w-full h-auto"
                />
                <div className="mt-4 flex space-x-2">
                  {product.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={product.name}
                      className={`w-12 h-12 cursor-pointer border ${
                        index === product.selectedImageIndex
                          ? "border-blue-500"
                          : "border-gray-200"
                      } rounded`}
                      onClick={() => handleThumbnailClick(index)}
                    />
                  ))}
                </div>
              </div>
              <div className="md:col-span-2">
                <h1 className="text-2xl my-5">{product.name}</h1>
                <div className="flex flex-col md:flex-row items-center md:justify-between">
                  <h2 className="text-4xl font-semibold">{product.price} DT</h2>
                  {product.isAvailable ? (
                    <button
                      className="px-4 py-2 bg-black text-white rounded hover:scale-105 mt-4 md:mt-0"
                      onClick={handleAddToBag}
                    >
                      Add to Bag
                    </button>
                  ) : (
                    <button className="px-4 py-2  bg-red-500 text-white rounded hover:scale-105 mt-4 md:mt-0">
                      out of stock
                    </button>
                  )}
                </div>
                <div className="mt-4">
                  {product.categories.map((category, index) => (
                    <span
                      key={index}
                      className="inline-block bg-gray-200 text-gray-700 text-sm px-2 py-1 rounded-full mr-2"
                    >
                      {category}
                    </span>
                  ))}
                </div>
                {product.option1 &&
                  product.option1 != "" &&
                  product.option1.length > 0 && (
                    <div className="mt-4">
                      <strong>{product.option1[0]}:</strong>
                      <ul className="pt-4">
                        <li>
                          {product.option1.slice(1).map((option, index) => (
                            <button
                              key={index}
                              className={`px-2 py-1 ml-2 border ${
                                selectedOptions.option1 === option
                                  ? "border-blue-500 text-blue-500"
                                  : "border-gray-200 text-gray-700"
                              } rounded`}
                              onClick={() =>
                                handleOptionClick("option1", option)
                              }
                            >
                              {option}
                            </button>
                          ))}
                        </li>
                      </ul>
                    </div>
                  )}
                {product.option2 &&
                  product.option2 != "" &&
                  product.option2.length > 0 && (
                    <div className="mt-4">
                      <strong>{product.option2[0]}:</strong>
                      <ul className="pt-4">
                        <li>
                          {product.option2.slice(1).map((option, index) => (
                            <button
                              key={index}
                              className={`px-2 py-1 ml-2 border ${
                                selectedOptions.option2 === option
                                  ? "border-blue-500 text-blue-500"
                                  : "border-gray-200 text-gray-700"
                              } rounded`}
                              onClick={() =>
                                handleOptionClick("option2", option)
                              }
                            >
                              {option}
                            </button>
                          ))}
                        </li>
                      </ul>
                    </div>
                  )}
                {product.option3 &&
                  product.option3 != "" &&
                  product.option3.length > 0 && (
                    <div className="my-4">
                      <strong c>{product.option3[0]}:</strong>
                      <ul className="pt-4">
                        <li>
                          {product.option3.slice(1).map((option, index) => (
                            <button
                              key={index}
                              className={`px-2 py-1 ml-2 border ${
                                selectedOptions.option3 === option
                                  ? "border-blue-500 text-blue-500"
                                  : "border-gray-200 text-gray-700"
                              } rounded`}
                              onClick={() =>
                                handleOptionClick("option3", option)
                              }
                            >
                              {option}
                            </button>
                          ))}
                        </li>
                      </ul>
                    </div>
                  )}

                <div>
                  <p className="text-xl my-4">Description :</p>
                  <p>{product.description}</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full text-center">
            <span className="loading loading-spinner loading-md absolute pt-20 text-center"></span>
          </div>
        )}
      </div>
      {product && <Footer />}
    </>
  );
};

export default ProductInfo;
