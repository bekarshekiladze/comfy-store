import { useLoaderData } from "react-router-dom";

function SingleProduct() {
  const singleProductData = useLoaderData();
  console.log(singleProductData);

  return <div>SingleProduct</div>;
}
export default SingleProduct;
