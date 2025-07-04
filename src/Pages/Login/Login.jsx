import { AuthContext } from '../../provider/AuthProvider'; 
import React, { useContext, useState } from 'react'
import { FaGoogle } from 'react-icons/fa'

import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";  
import { Link, useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Login = () => {
    const {loading,SignIn,googleSignIn}=useContext(AuthContext)
    const[loadingSign,setLoadingSignIn]=useState(null)

    const navigate=useNavigate()
    const location=useLocation()
  
     const handleLogin=(event)=>{
        setLoadingSignIn(true)
        event.preventDefault()
        const email=event.target.email.value 
        const password=event.target.password.value
  
     SignIn(email,password)
       .then((user)=>{
        toast.success("Login Successfully")
        navigate(location?.state ? location.state : '/')
       })
       .catch(()=>{
        toast.error("Something went wrong,Login failed")
       })
     }
     const handleSignInWithGoole=()=>{
        googleSignIn()
          .then((user)=>{
          toast.success("Google Login seccessfully")
          navigate(location?.state? location.state :'/')
          })
          .catch((error)=>{
           toast.error("Something went wrong,Login with google faild")
          })
     }

  //This func use in forgate password 
const handleForgotPassword = () => {
  const email = prompt("Type your email:");
  if (!email) return;

  sendPasswordResetEmail(auth, email)
    .then(() => {
      alert("Send reset link,check your email inbox");
    })
    .catch((error) => {
      console.error(error.message);
      alert("Email is not correct or another problim");
    });
};


  return (
   <div className="hero bg-base-200 min-h-screen">
    <div className="hero-content flex-col lg:flex-row-reverse">
  
    <div className="card bg-base-100 w-[380px] py-08 shrink-0 shadow-2xl">
     <div className="card-body">
     
             <form onSubmit={handleLogin} className="fieldset">         
               <label className="label">Email</label>
               <input type="email" name='email' className="input" placeholder="Email" />
               <label className="label">Password</label>
               <input type="password" name='password' className="input" placeholder="Password" />

              <div>
                <span className='link link-hover'> <Link to={'/signup'}> Don't have an account? Signup 
                </Link> </span>
              </div>
     
               <div>
                <a onClick={handleForgotPassword} className="link link-hover cursor-pointer 
                text-sm text-blue-600">
                Forgot password? </a>
               </div>
     
               {loading&&loadingSign?(
                <button className="btn btn-neutral mt-4">
                 <span className='loading loading-spinner loading-md text-white'></span></button>) :
                 (<button type='submit' className='btn btn-neutral mt-4'>Login</button>)
               }         
             </form>
             <button onClick={handleSignInWithGoole}
             className='btn btn-outline uppercase'> 
             <FaGoogle/> sign in witn google</button>
     
           </div>
    </div>
  </div>
</div>
  )
}

export default Login