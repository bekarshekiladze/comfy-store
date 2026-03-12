import { Outlet, useNavigation } from "react-router-dom";
import Header from "../widgets/Header";
import Navbar from "../widgets/Navbar";
import { Loading } from "../shared/ui";

function HomeLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <>
      <Header />
      <Navbar />
      <section className="align-element py-20">
        {isLoading ? <Loading /> : <Outlet />}
      </section>
    </>
  );
}
export default HomeLayout;
