import { useLoaderData } from "react-router-dom";
import Filters from "../../features/products/filters/ui/Filters";
import PaginationContainer from "../../widgets/products/PaginationContainer";
import ProductsContainer from "../../widgets/products/ProductsContainer";

function Products() {
  const { products, meta } = useLoaderData();
  console.log({ products, meta });

  return (
    <>
      <Filters meta={meta} />
      <ProductsContainer products={products} meta={meta} />
      <PaginationContainer />
    </>
  );
}
export default Products;
