import { AuthContext } from '../../prvider/AuthProvider'; 
import React, { useContext, useState } from 'react'
import { FaGoogle } from 'react-icons/fa'

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
          .then(()=>{
           console.log(error)
          })
          .catch((error)=>{
           console.log(error)
          })
     }
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
     
               <div><a className="link link-hover">Forgot password?</a></div>
     
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