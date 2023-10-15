import { useRef, useState } from "react";
import { validateLoginForm } from "../utils/validate";
import { toast } from "react-toastify";
import {signInWithEmailAndPassword} from 'firebase/auth'
import { auth } from "../firebase";


const LoginForm = ({ setIsLoginForm, isLoginForm }) => {

 
  const email = useRef(null);
  const password = useRef(null);

  

  function toggleForm() {
    setIsLoginForm(!isLoginForm);
  }

  async function handleSignInButtonClick() {
    const message = validateLoginForm(
      email.current.value,
      password.current.value
    );
    if(message){
        toast.error(message)
    }
    else{

      try{
        const userCredentials= await  signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        const user=userCredentials.user
        toast.success("user Logged In Successfully")
      }

      catch(err){

        if(err.message.includes("auth/invalid")){
          toast.error("Invalid Login Credentials")
          return;
        }
        toast.error(err.message)
      }

      
  
    }
  }

  return (
    
      <form
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white  rounded-lg bg-opacity-80"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h1 className="font-bold text-2xl py-4 mb-2">Sign In</h1>

        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="p-3 my-4 w-full bg-gray-700 rounded-lg outline-none"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 my-4 w-full  bg-gray-700 rounded-lg outline-none"
        />

        <button
          className="p-3 my-6 w-full bg-red-700  rounded-lg hover:bg-red-600"
          onClick={handleSignInButtonClick}
        >
          Sign In
        </button>

        <p className=" text-center p-4 text-gray-500 cursor-pointer ">
          New to Netflix?{" "}
          <span onClick={toggleForm} className="text-white hover:underline">
            {" "}
            Sign Up Now{" "}
          </span>
        </p>
      </form>

    
  );
};

export default LoginForm;
