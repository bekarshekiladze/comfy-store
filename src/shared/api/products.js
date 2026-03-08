import { httpClient } from "./client";

export const fetchFeaturedProducts = async () => {
  const res = await httpClient("/products", {
    params: {
      featured: true,
    },
  });
  return res.data.data ?? [];
};

export const fetchSingleProduct = async (id) => {
  const res = await httpClient(`/products/${id}`);
  return res.data.data;
};
