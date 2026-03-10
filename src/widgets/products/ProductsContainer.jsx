import { useState } from "react";
import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";

import { BsFillGridFill, BsList } from "react-icons/bs";

function ProductsContainer({ products, meta }) {
  const totalProducts = meta.pagination.total;
  const [layout, setLayout] = useState("grid");

  const setActiveStyles = (pattern) => {
    return `text-xl btn btn-circle btn-sm`;
  };
  return (
    <>
      {/* HEADER */}
      <div className="flex justify-between items-center mt-8 border-b border-base-300 pb-5">
        <h4 className="font-medium text-md">
          {totalProducts} product{totalProducts > 1 && "s"}
        </h4>
        <div className="flex gap-x-2">
          <button type="button">
            <BsFillGridFill />
          </button>
        </div>
      </div>
      {/* PRODUCTS */}
      <ProductsList products={products} />
      {/* <ProductsGrid products={products} /> */}
    </>
  );
}
export default ProductsContainer;
