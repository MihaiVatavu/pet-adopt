import {useState} from 'react'
import { projectFirestore } from '../firebase/config'

 const UpdateProfile = ({userid}) => {
   const[location,setLocation]=useState("")
   const[bio,setBio]=useState("")
   const[success,setSuccess]= useState(null)
   const[error,setError]=useState(null)
  
   const handleSubmit = (e)=>{
    e.preventDefault()
      projectFirestore.collection("users").doc(userid).update({
      city: location,
      bio: bio
  }).then(()=>{
    setSuccess("Updated")
  })
  .catch((error)=>{
    if(error){
      setError(error)
    }
  })
 }

  if (success) return (<h2 className="center">{success}</h2>)
  if (error) return (<h2 className="center">{error}</h2>)
  return (
    
        <form className="col s12 m10 l8 offset-l2" onSubmit={handleSubmit} >  
           <h4 className="center">Update/add your details</h4>
           <div className="input-field">
            <input type="text" id="location" className="validate" value={location}
            onChange={e => setLocation(e.target.value)}></input>
            <label htmlFor="location">Please enter your city</label>
           </div>
           <div className="input-field">
            <textarea id="bio" className="materialize-textarea validate" style={{height:"100px"}} value={bio} onChange={e => setBio(e.target.value)}></textarea>
            <label htmlFor="bio">Add bio</label>
           </div>
           <div className="input-field center">
              <button type="submit" className="btn-large color green accent-4" >Submit</button>
            </div>
        </form>      
    
  )
}

export default UpdateProfile