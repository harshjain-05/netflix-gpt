import { useRef, useState } from "react";
import { validateLoginForm } from "../utils/validate";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";

const LoginForm = ({ setIsLoginForm, isLoginForm }) => {
  const email = useRef(null);
  const password = useRef(null);
  const [popUpDisplay, setPopUpDisplay] = useState(false);
  

  function toggleForm() {
    setIsLoginForm(!isLoginForm);
  }

  function handleSignInButtonClick() {
    const message = validateLoginForm(
      email.current.value,
      password.current.value
    );
    if(message){
        toast.error(message)
    }
    else{
      toast.success("User Logged IN  Successfully")
    }
  }

  return (
    <>
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
          onMouseEnter={() => {
            setPopUpDisplay(true);
          }}
          onMouseLeave={() => {
            setPopUpDisplay(false);
          }}
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

      {popUpDisplay && (
        <div className="absolute bg-black top-80 right-36 w-3/12 text-center p-5 bg-opacity-80 text-gray-200 rounded-lg ">
          <p>
            {" "}
            Password must be least 8 characters long.  
          </p>
          <p>Contains at least one lowercase letter.</p>
          <p>Contains at least one uppercase letter.</p>
          <p> Contains at least one digit (number).</p>
          <p>Contains at least one special character  </p>
        </div>
      )}
    </>
  );
};

export default LoginForm;
