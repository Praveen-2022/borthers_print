import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const Home = () => {
  const [isVisible, setIsVisible] = useState(true);

  // Function to close the notification
  const closeNotification = () => {
    setIsVisible(false);
  };
  return (
    <>
      {/* {isVisible && (
        <div className=" w-full h-2 top-2 left-1/2 transform -translate-x-1/2 bg-white border border-gray-300 p-4 rounded-lg shadow-md flex items-center">
          <h1 className="text-xl">Welcome to Brother&apos;s Print</h1>
          <button
            className="text-gray-500 text-xl"
            onClick={closeNotification}
          >
            X
          </button>
        </div>
      )} */}
      <div className="bg-slate-500 p-1">
        <h1 className=" text-white text-sm font-semibold text-center tracking-wider">Early Birds or Night Owls, Get Upto 24% on but from 9AM to 8PM <button className="bg-cyan-500 mx-1 px-2 py-1 rounded-md">Early Bird upto 24%</button></h1>
      </div>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Home;