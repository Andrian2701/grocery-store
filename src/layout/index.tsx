import { Outlet } from "react-router-dom";
import { Footer, Header } from "./components";

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
