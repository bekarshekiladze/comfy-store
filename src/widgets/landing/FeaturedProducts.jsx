import { SectionTitle } from "../../shared/ui";
import ProductsGrid from "../products/ProductsGrid";

function FeaturedProducts() {
  return (
    <div className="pt-24">
      <SectionTitle text={"featured products"} />
      <ProductsGrid />
    </div>
  );
}
export default FeaturedProducts;
