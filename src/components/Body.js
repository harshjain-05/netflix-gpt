import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginAndSignUp from "./Authentication Components/Login&SignUp";
import Broswer from "./BrowserComponents/Browser";

import { useDispatch } from "react-redux";

const Body = () => {
  
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <LoginAndSignUp />,
    },

    {
      path: "/browse",
      element: <Broswer />,
    },
  ]);



  
  return <RouterProvider router={appRouter} />;
};

export default Body;
