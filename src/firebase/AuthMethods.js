import {projectAuth,projectFirestore} from './config';
export const authMethods = {
// firebase helper methods


signup:(name, email, password) =>{
  let data = {}
  projectAuth.createUserWithEmailAndPassword(email,password)
  .then(cred =>{
    data.email = `${cred.user.email}`
    cred.user.updateProfile({displayName:name})
  }).then(()=>{
    projectFirestore.collection("users")
    .doc(projectAuth.currentUser.uid)
    .set({name,email})
     return 
  })
  .catch(error => {
    data.message = `${error.message}`
  })
},
signin:(email, password) =>{
  let data = {}
  projectAuth.signInWithEmailAndPassword(email,password)
  .then( usercred => {
     data.email = `${usercred.user.email}`
  })
.catch(error => {
    data.message = `${error.message}`
    
})
console.log(data)
return data
},
signout:() =>{
  projectAuth.signOut().then(()=>{

  }).catch(()=>{
    
  })
},
updateUser:()=>{
  

}

}

