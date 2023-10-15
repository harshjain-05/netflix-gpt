import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import LoginAndSignUp from "./Login&SignUp";
import Broswer from "./Browser";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();

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

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
     
        if (user) {
        dispatch(
          addUser({
            uid: user.uid,
            email: user.email,
            name: user.displayName,
          })
        );
      }
      
      else {
        dispatch(removeUser());
      }
    });
  }, []);

  return <RouterProvider router={appRouter} />;
};

export default Body;
