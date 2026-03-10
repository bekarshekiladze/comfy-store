import { useLoaderData } from "react-router-dom";
import Filters from "../../widgets/products/Filters";
import PaginationContainer from "../../widgets/products/PaginationContainer";
import ProductsContainer from "../../widgets/products/ProductsContainer";

function Products() {
  const { products, meta } = useLoaderData();
  console.log({ products, meta });

  return (
    <>
      <Filters />
      <ProductsContainer products={products} meta={meta} />
      <PaginationContainer />
    </>
  );
}
export default Products;
