import { SectionTitle } from "../../shared/ui";
import ProductsGrid from "../products/ProductsGrid";

function FeaturedProducts({ featuredProducts }) {
  return (
    <section className="pt-24">
      <SectionTitle text={"featured products"} />
      <ProductsGrid products={featuredProducts} />
    </section>
  );
}
export default FeaturedProducts;
