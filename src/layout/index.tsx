import { Outlet } from "react-router-dom";
import { Footer, Header } from "./components";
import { ModalWindow } from "../common";

export const Layout = () => {
  return (
    <>
      <ModalWindow />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
