import { AuthContext } from '../../provider/AuthProvider'; 
import React, { useContext, useState } from 'react'
import { FaGoogle } from 'react-icons/fa'

import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";  
import { Link } from 'react-router-dom';

const Login = () => {
  const {loading,SignIn,googleSignIn}=useContext(AuthContext)
     const[loadingSign,setLoadingSignIn]=useState(null)
  
     const handleLogin=(event)=>{
        setLoadingSignIn(true)
        event.preventDefault()
        const email=event.target.email.value 
        const password=event.target.password.value
  
     SignIn(email,password)
       .then((user)=>{
        console.log(user)
       })
       .catch((error)=>{
        console.log(error)
       })
     }
     const handleSignInWithGoole=()=>{
        googleSignIn()
          .then((user)=>{
           console.log(user)
          })
          .catch((error)=>{
           console.log(error)
          })
     }

  //This func is forgate password 
const handleForgotPassword = () => {
  const email = prompt("তোমার রেজিস্টার্ড ইমেইল লিখো:");
  if (!email) return;

  sendPasswordResetEmail(auth, email)
    .then(() => {
      alert("পাসওয়ার্ড রিসেট লিংক পাঠানো হয়েছে। ইনবক্স চেক করো।");
    })
    .catch((error) => {
      console.error(error.message);
      alert("ইমেইল সঠিক নয় অথবা অন্য কোনো সমস্যা হয়েছে।");
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

     
               {loading&&loadingSign?<button className="btn btn-neutral mt-4">
                 <span className='loading loading-spinner loading-md text-white'></span></button> :
                 <button type='submit' className='btn btn-neutral mt-4'>Login</button>
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