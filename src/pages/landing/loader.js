import { httpClient } from "../../shared/api";

const url = "/products?featured=true";

const loader = async () => {
  const response = await httpClient(url);
  const products = response.data.data;
  return products;
};

export default loader;
