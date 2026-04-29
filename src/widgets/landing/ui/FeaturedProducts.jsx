import { ProductsGrid } from "@/entities/product";
import { SectionTitle } from "@/shared/ui";

export const FeaturedProducts = ({ featuredProducts }) => {
  return (
    <section className="pt-24">
      <SectionTitle text={"featured products"} />
      <ProductsGrid products={featuredProducts} />
    </section>
  );
};
