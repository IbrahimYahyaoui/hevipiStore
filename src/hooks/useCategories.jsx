import { useEffect, useState } from "react";
import axios from "axios";

export const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAllCategories = () => {
    axios
      .get(`${import.meta.env.VITE_URL_prod}/category/all`)
      .then((response) => {
        console.log("<cat : >", response.data);
        setCategories(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  return { getAllCategories, categories, isLoading };
};
