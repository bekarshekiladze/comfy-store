import { fetchFeaturedProducts } from "../../shared/api/products";

export const loader = async () => {
  const products = await fetchFeaturedProducts();
  return products;
};
