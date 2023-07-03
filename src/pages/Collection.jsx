import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "../hooks/useProduct";
import ProductComp from "../components/ProductComp";

const Collection = () => {
  const { id } = useParams();
  const { classifiedProducts } = useProduct();
  const [currentProduct, setCurrentProduct] = useState();

  useEffect(() => {
    setCurrentProduct(classifiedProducts[id]);
  }, [id, classifiedProducts]); // Include classifiedProducts in the dependency array

  // Add a check for classifiedProducts and currentProduct before rendering
  if (!classifiedProducts || !currentProduct) {
    return (
      <div className="grid place-content-center pt-52">
        <span className="loading loading-spinner loading-md"></span>
      </div>
    ); // Render a loading state while the data is being fetched
  }

  return (
    <div className="m-6">
      <h1 className="text-3xl">{id}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {currentProduct.map((prd) => (
          <ProductComp product={prd} key={prd._id} />
        ))}
      </div>
    </div>
  );
};

export default Collection;
