import React from 'react';
import {projectAuth} from '../firebase/config'
import {authMethods} from '../firebase/AuthMethods'
import {useState,useEffect} from 'react'

export const firebaseAuth = React.createContext()   
export const CurrentUserContext = React.createContext()

export const UserAuthProvider = ({children})=>{

const[loading, setLoading]= useState(true)
const [currentUser,setCurrentUser]= useState(null)

useEffect(()=>{
  projectAuth.onAuthStateChanged((user)=>{
  setCurrentUser(user)
  setLoading(false)
  })
},[])
if(loading){
  return <p>Loading...</p>
}
return(
  <CurrentUserContext.Provider value={{ currentUser }}>
  {children}
</CurrentUserContext.Provider>
)
}

export const AuthProvider = ({children})=>{
  return(
    <firebaseAuth.Provider value={authMethods}>
      {children}
    </firebaseAuth.Provider>
  )
}