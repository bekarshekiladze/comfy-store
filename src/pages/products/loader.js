import { fetchProducts } from "../../shared/api/products";

export const loader = async () => {
  const res = await fetchProducts();
  const { data: products, meta } = res;
  return { products, meta };
};
