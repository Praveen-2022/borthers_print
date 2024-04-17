import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import OtherItems from "./pages/OtherItems";
import CustomTshirts from "./pages/CustomTshirts";
import About from "./pages/About"; 
import Mug from "./pages/Mug";
import Contact from "./pages/Contact";
import MainPage from "./pages/MainPage";
import BulkOrder from "./pages/BulkOrder";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <MainPage/>,
        },
        {
          path: "/customthirts",
          element: <CustomTshirts/>,
        },
        {
          path: "/mug",
          element: <Mug/>,
        },
        {
          path: "/otheritems",
          element: <OtherItems />
        },
        {
          path: "/bulkorder",
          element: <BulkOrder />
        },
        {
          path: "/about",
          element: <About/>
        },
        {
          path: "/contact",
          element: <Contact/>,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
      <Outlet />
    </>
  );
};

export default App;
