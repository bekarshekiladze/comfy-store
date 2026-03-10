import { fetchProducts } from "../../shared/api/products";

export const loader = async () => {
  const products = await fetchProducts();
  return products;
};
