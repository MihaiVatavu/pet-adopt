import {useState,useEffect} from 'react'
import {projectFirestore} from '../firebase/config'
import '../styles/petGrid.css'

const PetGrid = ()=>{

  const[pets,setPets]= useState([])

  useEffect(()=>{
    const fetchPets = async () => {
       const petsCollection = await projectFirestore.collection("pets").get();
       setPets(
         petsCollection.docs.map((doc) => {
           return doc.data();
         })
       );
     };
     fetchPets();
 },[])

return(

  <div>
    <ul className="img-grid" >
      {pets.map((pet) => {
          return (
          <li className="row" key={pet.name}>
               <div class="card">
                  <div className="card-image waves-effect waves-block waves-light img">
                     <img className="activator" alt="Activator" src={pet.avatar}/>
                  </div>
                  <div className="card-content">
                     <span className="card-title activator grey-text text-darken-4">{pet.name}<i class="material-icons right">more_vert</i></span>
                     <p>{pet.city}</p>
                  </div>
                  <div className="card-reveal">
                     <span className="card-title grey-text text-darken-4">{pet.name}<i className="material-icons right">close</i></span>
                     <p>Age : {pet.age}</p>
                     <p>Contact Phone : {pet.contact}</p>
                     <p>Contact Email : {pet.email}</p>
                     <p>{pet.description}</p>
                  </div>
               </div>
           </li> 
          );
        })}
      </ul>
  </div>
    
  
)

}

export default PetGrid