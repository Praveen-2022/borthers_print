import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="">
      <Header/>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Home;