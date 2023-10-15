import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { toast } from "react-toastify";

const Header = () => {


  
  
  const[isBrowsePage, setIsBrowsePage] = useState(false);
  const location = useLocation();
  const dispatch=useDispatch()
  const navigate=useNavigate()

   function handleLogout(){
    
    signOut(auth).then(() => {

    dispatch(removeUser())
     navigate("/")

    }).catch((error) => {

     navigate("/error")
      
    });
    
    
  }
  
  
  useEffect(()=>{
     if (location.pathname === "/browse") {
      setIsBrowsePage(true);
    }
  },[])
 
  return (
    <div className=" w-full absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-48"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix-Logo"
      />

      {isBrowsePage && (
        <div className="flex p-2 border-2 border-yellow-400 gap-2 mt-2 ">
          <img src="https://occ-0-3217-3646.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABZBe7K0DPia9LvzIkQ4yzqX9NocZlAjS1MOyEuBQD1WmFuLKZwvq0bxc4n4_EV73khqgwed0PYLNml0V8LCymt31e7x-8jQ.png?r=229" className="w-12 h-12" />

          <button className="text-white" onClick={handleLogout}>LogOut</button>
        </div>
      )}
    </div>
  );
};

export default Header;
