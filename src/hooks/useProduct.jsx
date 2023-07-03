import axios from "axios";
import { useEffect, useState } from "react";

export const useProduct = () => {
  const [products, setProducts] = useState();
  const [classifiedProducts, setClassifiedProducts] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const getAllProduct = () => {
    axios
      .get(`${import.meta.env.VITE_URL_prod}/item/getAll`)
      .then((response) => {
        console.log(response);
        classifyProductsByCategory(response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const classifyProductsByCategory = (productList) => {
    const classified = {};
    productList.forEach((product) => {
      product.categories.forEach((category) => {
        if (classified[category]) {
          classified[category].push(product);
        } else {
          classified[category] = [product];
        }
      });
    });
    console.log("aa", classified);
    setClassifiedProducts(classified);
  };

  useEffect(() => {
    getAllProduct();
  }, []);

  return { getAllProduct, classifiedProducts, products };
};
