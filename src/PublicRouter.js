import Footer from "../src/components/Footer/Footer";
import Nav from "../src/components/Nav/Nav";
import Menutab from "./pages/Menutab/Menutab";
import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <>
      <Nav />
      <Menutab />
      <Outlet />
      <Footer />
    </>
  );
};

export default PublicLayout;
