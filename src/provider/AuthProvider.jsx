import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup,GoogleAuthProvider, signOut } from "firebase/auth"
import { createContext,useState,useEffect } from "react"
import { auth } from "../firebase/firebase.config"

//create provider for Google Sign In feature  and global context 
const provider=new GoogleAuthProvider();
export const AuthContext=createContext(null)

//custom react component and usestate Hook
const AuthProvider = ({children}) => {
   const[loading,setLoading]=useState(false)
   const[user,setUser]=useState(null)

//new user registration by firebase
   const createUser=(email,password)=>{
      setLoading(true)
      return createUserWithEmailAndPassword(auth,email,password)
   }

//user login by email and password
   const SignIn=(email,password)=> {
       setLoading(true)
       return signInWithEmailAndPassword(auth,email,password)
   }

//user login by google popup
   const googleSignIn=()=>{
      setLoading(true)
      return signInWithPopup(auth,provider)
   }

//logout section
const logout=()=>{
   return signOut(auth)
}

//detect state change from login to logout and reverae
   useEffect(()=>{
      const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
         setUser(currentUser)
         setLoading(false)
      })
      return()=>{
         unsubscribe()
      }
   },[])
   
  const authInfo={loading,user,createUser,SignIn,googleSignIn,logout}
  return (
    <AuthContext.Provider value={authInfo}>
      {
         children
      }
   </AuthContext.Provider>
  )
}

export default AuthProvider