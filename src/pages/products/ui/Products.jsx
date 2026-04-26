import Filters from "@/pages/products/ui/Filters";
import { PaginationContainer, ProductsContainer } from "@/widgets/products";
import { useLoaderData } from "react-router-dom";

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
