import {useEffect,useState} from 'react'
import M from 'materialize-css'
import {projectAuth,projectFirestore} from '../firebase/config'
import Loading from './Loading'
import UpdateProfile from './UpdateProfile'

const Dashboard =  () => {

   const[userName,setUserName] = useState(null)
   const[authUser,setAuthUser] = useState(null)
   const[uid,setUid]=useState()
   const[userData,setUserData]=useState()
   const[render,setRender]=useState(null)

   useEffect(()=>{
    let elems = document.querySelectorAll('.modal');
    M.Modal.init(elems,{});
   },[render])

  
 

   useEffect(()=>{
    const unlisten = projectAuth.onAuthStateChanged(
       authUser => {
         if(authUser)
         { setAuthUser(authUser)
          setUserName(authUser.displayName)
          setUid(authUser.uid)
         }
           else {setAuthUser(null)}
       },       
    )
     return()=>{
      unlisten()
     };
    
 });

  useEffect(()=>{
    const fetchUser = async ()=> {
      const userRef = projectFirestore.collection("users").doc(uid)
       await userRef.get()
      .then((doc)=>{
        setUserData(doc.data())
      })
      return setRender(true)
    }

    return ()=>{ 
      fetchUser()
    } 
  })

     if(!authUser) {
      return <Loading/>
     }  return (
       <div className="container utilityvh">
         <h2 className="center">Hello {userName}</h2>
         <div className="row">
            <div className="col s12 m8 offset-m2 l6 offset-l3 center">
            {
              userData ? (<h5>City:{userData.city}</h5>)
              : (<h5>City:Update</h5>)
            }
            {
              userData ? (<h5>Bio:{userData.bio}</h5>)
              : (<h5>Bio:Update</h5>)

            }
              
              <a className="waves-effect waves-light btn-large modal-trigger color green accent-4 center" href="#modal">Update details</a>
              <div id="modal" className="modal">
                <div className="modal-content">
                  <UpdateProfile userid={uid}/> 
                </div>
              </div>
            </div>
         </div>      
       </div>
        );
     

}
 
export default Dashboard;