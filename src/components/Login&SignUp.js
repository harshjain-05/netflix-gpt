import Header from "./Header";
import { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import { backgroundImage } from "../utils/constants";


const LoginAndSignUp = () => {


  const [isLoginForm ,setIsLoginForm] = useState(true);


  return (
    <div>
      <Header />
      <div className="absolute top-0 bottom-0 -z-10">
        <img src={backgroundImage} />
      </div>
        {
          isLoginForm?<LoginForm setIsLoginForm={setIsLoginForm} isLoginForm={isLoginForm}/>:<SignUpForm setIsLoginForm={setIsLoginForm} isLoginForm={isLoginForm}/>
        }
    </div>
  );
}

export default LoginAndSignUp;
