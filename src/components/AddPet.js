import {projectFirestore, projectStorage} from '../firebase/config'
import {useState} from 'react'

const AddPet = () =>{

   const[name , setName] = useState("")
   const[description, setDescription] = useState("")
   const[age,setAge]= useState("")
   const[city,setCity]= useState("")
   const[phone,setPhone]= useState("")
   const[email,setEmail]= useState("")
   const[url,setUrl]= useState(null)
   const [submitted,setSubmitted] = useState(false)

   const handleSubmit = e =>{
      e.preventDefault()
      // console.log(name,description,file.name)
      
      projectFirestore.collection('pets').add({
         name:name,
         description:description,
         age:age,
         city:city,
         contact:phone,
         email:email,
         avatar:url
      })
      setSubmitted(true)
   }

   const fileHandler =  async (e)=>{
      const file = e.target.files[0]   
      const fileRef = projectStorage.ref(file.name)
      await fileRef.put(file)
      setUrl(await fileRef.getDownloadURL())
   
   }

  return(

    <div className="container uitilityvh">
      <div className="row">
        {submitted ? (<h1 className="center">Thank you for helping</h1>)
        : (
          <form id="add-pet" className="col s10 m8 l6 offset-s1 offset-l3" onSubmit={handleSubmit}>
        <h4 className ="center">Add a pet</h4>
            <div className="input-field">
              <input type="text" id="pet-name" className="validate" value={name} onChange={e =>   setName(e.target.value)}></input>
               <label htmlFor="pet-name">Add pet name</label>
             </div>
            <div className="input-field">
              <input type="text" id="pet-age" className="validate" value={age} onChange={e =>   setAge(e.target.value)}></input>
               <label htmlFor="pet-age">Add pet age</label>
             </div>
            <div className="input-field">
              <input type="text" id="location" className="validate" value={city} onChange={e =>   setCity(e.target.value)}></input>
               <label htmlFor="location">Add your city</label>
             </div>
            <div className="input-field">
              <input type="text" id="phone-number" className="validate" value={phone} onChange={e =>   setPhone(e.target.value)}></input>
               <label htmlFor="phone-number">Add a contact number</label>
             </div>
             <div className="input-field">
              <input type="email" id="email" className="validate" value={email} onChange={ e => setEmail(e.target.value)}></input>
              <label htmlFor="email">Please enter a contact email</label>
            </div>
           <div className="input-field">
               <textarea className="materialize-textarea validate" id="pet-description" value={description} onChange={e => setDescription(e.target.value)} style={{height:"100px"}}></textarea>
                <label htmlFor="pet-description">Add a description</label>
            </div>
             <div className="file-field input-field">
                 <div className="btn color green accent-4">
                  <span>Add</span>
                  <input type="file" onChange={fileHandler} />
                </div>
                <div className="file-path-wrapper">
                     <input className="file-path" placeholder="Please add a pet image"/>
                   </div>
             </div>
             <div className="input-field center">
               <button type="submit" className="btn color green accent-4" >Submit</button>
             </div>
          </form>
        )
      }
        
      </div>
      
    </div>
  )
}

export default AddPet;