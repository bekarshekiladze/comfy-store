import { SectionTitle } from "@/shared/ui";
import { ProductsGrid } from "../products";

function FeaturedProducts({ featuredProducts }) {
  return (
    <section className="pt-24">
      <SectionTitle text={"featured products"} />
      <ProductsGrid products={featuredProducts} />
    </section>
  );
}
export default FeaturedProducts;
