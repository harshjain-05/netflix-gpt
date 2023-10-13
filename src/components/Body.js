import { RouterProvider, createBrowserRouter } from "react-router-dom"
import LoginAndSignUp from "./Login&SignUp"
import Broswer from "./Browser"

const Body=()=>{

    const appRouter=createBrowserRouter([
        {
            path:"/",
            element:< LoginAndSignUp/>

        },


        {
            path:"/browse",
            element:<Broswer/>
            
        }
    ])
   
    return(
          <RouterProvider router={appRouter}/>
    )
}

export default Body