import { useState,useRef } from "react";
import { validateSignUpForm } from "../utils/validate";
import { toast } from "react-toastify";

const SignUpForm = ({ setIsLoginForm, isLoginForm }) => {
  const email = useRef(null);
  const password = useRef(null);
  const name=useRef("")
  const confirmPassword=useRef("")
  const [popUpDisplay, setPopUpDisplay] = useState(false);

  function toggleForm() {
    setIsLoginForm(!isLoginForm);
  }

  function handleSignUpButtonClick(){
    console.log()
    const message=validateSignUpForm(name.current.value, email.current.value,password.current.value,confirmPassword.current.value)
    if(message){
      toast.error(message)
    }
    else{
          toast.success("User Signed Up successfully")
    }
  }

  return (
    <>
      <form
        className="w-3/12 absolute p-12 bg-black my-28
     mx-auto right-0 left-0 text-white  rounded-lg bg-opacity-80"
     onSubmit={(e)=>{e.preventDefault()}}
      >
        <h1 className="font-bold text-2xl py-4 mb-2">Sign Up</h1>

        <input
          type="text"
          placeholder="Full Name"
          ref={name}
          className="p-3 my-3 w-full bg-gray-700 rounded-lg outline-none"
        />

        <input
          type="text"
          placeholder="Email"
          ref={email}
          className="p-3 my-3 w-full bg-gray-700 rounded-lg outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          ref={password}
          className="p-3 my-3 w-full  bg-gray-700 rounded-lg outline-none"
          onMouseEnter={() => {
            setPopUpDisplay(true);
          }}
          onMouseLeave={() => {
            setPopUpDisplay(false);
          }}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          ref={confirmPassword}
          className="p-3 my-4 w-full  bg-gray-700 rounded-lg outline-none"
        />

        <button
          className="p-3 my-6 w-full bg-red-700  rounded-lg hover:bg-red-600"
          onClick={handleSignUpButtonClick}
        >
          Sign Up
        </button>
        <p className=" text-center p-4 text-gray-500 cursor-pointer ">
          Already a Member?{" "}
          <span onClick={toggleForm} className="text-white  hover:underline">
            Click to login
          </span>
        </p>
      </form>

      {popUpDisplay && (
        <div className="absolute bg-black top-80 right-36 w-3/12 text-center p-5 bg-opacity-80 text-gray-200 rounded-lg ">
          <p> Password must be least 8 characters long.</p>
          <p>Contains at least one lowercase letter.</p>
          <p>Contains at least one uppercase letter.</p>
          <p> Contains at least one digit (number).</p>
          <p>Contains at least one special character </p>
        </div>
      )}
    </>
  );
};
export default SignUpForm;
