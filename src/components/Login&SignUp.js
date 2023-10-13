import Header from "./Header";
import { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

const LoginAndSignUp = () => {
  const [isLoginForm ,setIsLoginForm] = useState(true);

  return (
    <div>
      <Header />
      <div className="absolute top-0 bottom-0 -z-10">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_large.jpg" />
      </div>
        {
          isLoginForm?<LoginForm setIsLoginForm={setIsLoginForm} isLoginForm={isLoginForm}/>:<SignUpForm setIsLoginForm={setIsLoginForm} isLoginForm={isLoginForm}/>
        }
    </div>
  );
}

export default LoginAndSignUp;
