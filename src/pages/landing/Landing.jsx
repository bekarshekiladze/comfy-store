import { FeaturedProducts, Hero } from "@/widgets";
import { useLoaderData } from "react-router-dom";

function Landing() {
  const featuredProducts = useLoaderData();
  return (
    <>
      <Hero />
      <FeaturedProducts featuredProducts={featuredProducts} />
    </>
  );
}
export default Landing;
