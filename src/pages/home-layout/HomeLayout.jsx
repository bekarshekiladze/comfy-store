import { Loading } from "@/shared/ui";
import Header from "@/widgets/header/Header";
import { Navbar } from "@/widgets/navbar";
import { Outlet, useNavigation } from "react-router-dom";

export const HomeLayout = () => {
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
