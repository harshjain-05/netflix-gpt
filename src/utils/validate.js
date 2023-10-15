export const validateLoginForm=(email,password)=>{

   const isEmail= /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)
   const isPassword= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\S]{8,}$/.test(password)

   if(!email||!password) return("All the Details must be entered")

   if(!isEmail) return("Please Enter a valid Email")

   return null;

}


export const validateSignUpForm=(name, email,password,confirmPassword)=>{
  

   const isEmail= /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)
   const isPassword= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\S]{8,}$/.test(password)

   if(!email||!password||!name||!confirmPassword){
      return("All the Details must be entered")
   }

   if(!isEmail) return("Please Enter a valid Email")

   if(!isPassword) return("Please Enter a valid password")

   if(password!==confirmPassword){
      return("Password and confirmed password doesnt match")
   }

   return null;

}

