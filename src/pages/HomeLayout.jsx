import { Outlet } from "react-router-dom";
import Header from "../widgets/Header";
import Navbar from "../widgets/Navbar";

function HomeLayout() {
  return (
    <>
      <Header />
      <Navbar />
      <section className="align-element py-20">
        <Outlet />
      </section>
    </>
  );
}
export default HomeLayout;
