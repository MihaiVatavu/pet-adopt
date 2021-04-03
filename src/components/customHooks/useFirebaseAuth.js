import {projectAuth} from '../../firebase/config'
import {useState,useEffect} from'react'

const useFirebaseAuth = ()=>{
  const[authUser,setAuthUser] = useState(null)

  useEffect(() =>{
    const unlisten = projectAuth.onAuthStateChanged(
       authUser => {
         authUser
           ? setAuthUser(authUser)
           : setAuthUser(null);
       },
    );
    return () => {
        unlisten();
    }
 });

 return authUser
}

export default useFirebaseAuth