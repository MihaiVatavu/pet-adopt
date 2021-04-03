import {useState, useContext} from 'react'
import { firebaseAuth } from '../provider/authProvider'
import { Redirect } from "react-router-dom";


const SignUp = () => {
  const [currentUser, setCurrentUser] = useState(null);  
  const methods = useContext(firebaseAuth)
  
  const[name,setName] = useState("")
  const[email,setEmail] = useState("")
  const[password,setPassword] = useState("")
 
  const handleSubmit =(event)=>{
      event.preventDefault()
      methods.signup(name, email ,password)
      setCurrentUser(true)      
 }
  if(currentUser){

  return <Redirect to="/PetGrid" />
 
  } 
  return ( 
    <>
      <h1 className="center">Sign Up</h1>
      <div className="row">
        <div className="col s12 m8 l4 offset-l4">
        <form id="sign-up" onSubmit={handleSubmit}>
          <div className="input-field">
            <input type="text" id="name" value={name} className="validate" onChange={ e => setName(e.target.value)}></input>
            <label htmlFor="name">Please add your name</label>
          </div>
          <div className="input-field">
            <input type="email" id="email" value={email} className="validate" onChange={ e => setEmail(e.target.value)}></input>
            <label htmlFor="email">Please add your email</label>
          </div>
          <div className="input-field">
            <input type="password" id="password" value={password} className="validate" onChange={ e => setPassword(e.target.value)}></input>
            <label htmlFor="password">Please enter a password</label>
          </div>
          <div className="input-field center">
            <button type="submit" className="btn-large color green accent-4">Submit</button>
          </div>
        </form>
        </div>
      </div>
    </>
    
   );
}
 
export default SignUp;