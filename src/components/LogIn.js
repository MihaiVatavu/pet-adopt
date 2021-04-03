import {useState, useContext} from 'react'
import { firebaseAuth } from '../provider/authProvider'
import {CurrentUserContext} from '../provider/authProvider'
import { Redirect } from "react-router-dom";

const LogIn = () => {
  const methods = useContext(firebaseAuth)
  const {currentUser} = useContext(CurrentUserContext)

  const[email,setEmail] = useState("")
  const[password,setPassword] = useState("")
  const[error,setError] = useState(null)

    const handleSubmit =(event)=>{
      event.preventDefault()
      const result = methods.signin(email,password)
      console.log({result})
      setError({result}) 
      return 
    }
  if (currentUser) {
    return <Redirect to="/Dashboard" />;
  }else{ 
    return(
      <>
        <h1 className="center">Log In</h1>
        <div className="row">
          {error && <h4 className="center">Username or password incorrect</h4> }
          <div className="col s12 m8 l4 offset-l4">
          <form id="log-in" onSubmit={handleSubmit}>
            <div className="input-field">
              <input type="email" id="email" className="validate" value={email} onChange={ e => setEmail(e.target.value)}></input>
              <label htmlFor="email">Please enter your email</label>
            </div>
            <div className="input-field">
              <input type="password" id="password" className="validate" value={password} onChange={ e => setPassword(e.target.value)}></input>
              <label htmlFor="password">Please enter your password</label>
            </div>
            <div className="input-field center">
              <button type="submit" className="btn-large color green accent-4" >Submit</button>
            </div>
          </form>
         </div>
        </div>
      </>
        )
  }
 
}
 
export default LogIn;