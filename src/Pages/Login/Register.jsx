import React, { useContext, useState } from 'react'
import AuthProvider, { AuthContext } from '../../provider/AuthProvider'
import {FaGoogle} from 'react-icons/fa'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { updateProfile } from 'firebase/auth'
import { auth } from '../../firebase/firebase.config'
import toast from 'react-hot-toast'

const Register = () => {
   const {loading,createUser,googleSignIn}=useContext(AuthContext)
   const[loadingSign,setLoadingSignIn]=useState(null)

   const navigate=useNavigate()
   const location=useLocation()

   const handleRegister=(event)=>{
      setLoadingSignIn(true)
      event.preventDefault()
      const name=event.target.name.value 
      const email=event.target.email.value 
      const password=event.target.password.value

   if (password.length < 6) {
    alert("Password must be at least 6 characters");
    setLoadingSignIn(false);
    return;
   }

   createUser(email,password)
     .then((user)=>{
      console.log(user)
      event.target.reset()
      updateProfile(auth.currentUser,{displayName:name})
     }).then(()=>{
       toast.success("Registration Successfully")
       navigate(location?.state ? location.state : '/')
     })

     .catch((error)=>{
      toast.error("Something went wrong,Registration failed")
     })
  }
   
   const handleSignInWithGoole=()=>{
      googleSignIn()
        .then(()=>{
        toast.success("Google SignIn seccessfully")
        navigate(location?.state? location.state :'/')
        })
        .catch((error)=>{
         toast.error("Something went wrong,signIn with google faild")
        })
      
   }

  return (
   <div className="hero bg-base-200 min-h-screen">
    <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card bg-base-100 w-[380px] py-08 shrink-0 shadow-2xl">
      <div className="card-body">

        <form onSubmit={handleRegister} className="fieldset">
         <label className="label">Name</label>
          <input type="text" name='name' className="input" placeholder="Name" />
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />

        <div>
          <span  className="link link-hover"><Link to={'/login'}>already have an account? Login</Link>
          </span>
        </div>

          {loading&&loadingSign?<button className="btn btn-neutral mt-4">
            <span className='loading loading-spinner loading-md text-white'></span></button> :
            <button type='submit' className='btn btn-neutral mt-4'>Signup</button>
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

export default Register