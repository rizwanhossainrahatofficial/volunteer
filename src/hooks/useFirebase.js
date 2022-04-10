import firebaseAuthentication from "../Firebase/firebase.init"
import { getAuth, GoogleAuthProvider,signInWithPopup ,onAuthStateChanged,signOut } from "firebase/auth";
import { useEffect, useState } from "react";

firebaseAuthentication()
const useFirebase=()=>{
const [user,setuser]=useState({})

const auth = getAuth();

const googleSingIn=()=>{
const googleProvider = new GoogleAuthProvider();
signInWithPopup(auth,googleProvider)
.then(result=>{
    setuser(result.user)
})  

}

useEffect(()=>{
    const unsubscribe=  onAuthStateChanged(auth,user=>{
          if(user){
            setuser(user)
          }
          else{
            setuser({})
          }
        
      })
      return ()=>unsubscribe;
  },[]);

  const logOut=()=>{
        signOut(auth)
        .then(()=>{

        })
  }


return{
    logOut,
    user,
    googleSingIn,
}
}

export default useFirebase;