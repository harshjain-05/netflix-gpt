import { useState,useRef } from "react";
import { validateSignUpForm } from "../utils/validate";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";








const SignUpForm = ({ setIsLoginForm, isLoginForm }) => {
  const navigate=useNavigate()
  const email = useRef(null);
  const password = useRef(null);
  const fullname=useRef(null)
  const confirmPassword=useRef(null)
  const dispatch=useDispatch()
  const [popUpDisplay, setPopUpDisplay] = useState(false);

  function toggleForm() {
    setIsLoginForm(!isLoginForm);
  }

  async function handleSignUpButtonClick(){
    console.log()
    const message=validateSignUpForm(fullname.current.value, email.current.value,password.current.value,confirmPassword.current.value)
    if(message){
      toast.error(message)
    }
    else{
        try{
          const userCredentials= await createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
          const user=userCredentials.user
          await updateProfile(user, {
            displayName: fullname.current.value
          })
          dispatch(addUser({
            uid: auth.currentUser.uid,
            email: auth.currentUser.email,
            name: auth.currentUser.displayName
          }))

          toast.success("User Signed Up successfully")
          navigate("/browse")
        }

        catch(error){
          toast.error(error.message)
        }

     
        
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
          ref={fullname}
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
