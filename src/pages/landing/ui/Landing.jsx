import { FeaturedProducts, Hero } from "@/widgets/landing";
import { useLoaderData } from "react-router-dom";

export const Landing = () => {
  const featuredProducts = useLoaderData();
  return (
    <>
      <Hero />
      <FeaturedProducts featuredProducts={featuredProducts} />
    </>
  );
};
