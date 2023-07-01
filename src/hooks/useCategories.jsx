import { useEffect, useState } from "react";
import axios from "axios";

export const useCategories = () => {
  const [categories, setCategories] = useState();

  const getAllCategories = () => {
    axios
      .get(`${import.meta.env.VITE_URL_prod}/category/all`)
      .then((response) => {
        console.log("<cat : >", response.data);
        setCategories(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  return { getAllCategories, categories };
};
