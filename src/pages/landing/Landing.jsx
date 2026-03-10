import { useLoaderData } from "react-router-dom";
import { FeaturedProducts, Hero } from "../../widgets/landing";

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
