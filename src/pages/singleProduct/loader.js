import { fetchSingleProduct } from "../../shared/api/products";

export const loader = async ({ params }) => {
  const { id } = params;
  const data = await fetchSingleProduct(id);

  return data;
};
