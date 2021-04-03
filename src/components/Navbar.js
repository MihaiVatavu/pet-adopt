import M from 'materialize-css'
import { useContext,useEffect } from 'react';
import {Link} from 'react-router-dom';
import { CurrentUserContext, firebaseAuth } from '../provider/authProvider';

const Navbar = () => {

  useEffect(()=>{
    const sidenav = document.querySelectorAll('.sidenav');
     M.Sidenav.init(sidenav, {});

  })
    
  const {currentUser} = useContext(CurrentUserContext)
  const {signout} = useContext(firebaseAuth)
  return (

    <>
      <nav className="nav-wrapper color green accent-4">
        <div className="container">
          {
            currentUser ? (<Link to="/Dashboard" className="brand-logo">Adopt a Pet</Link>) 
            : ( <Link to="/" className="brand-logo">Adopt a Pet</Link> )
          } 
          <Link href="#" className="sidenav-trigger" data-target="mobile-links">
            <i className="material-icons">menu</i>
          </Link>
          {
            currentUser ? (
              <ul className="right hide-on-med-and-down">
                <li><Link to="/AddPet">Add Pet</Link></li>
                <li><Link to="/PetGrid">See Pets</Link></li>
                <li><Link to="/Dashboard">Account</Link></li>
                <li onClick = {()=>{signout()}}><Link to="/">Log Out</Link></li>
            </ul>
            ) : (
              <ul className="right hide-on-med-and-down">
              <li><Link to="/PetGrid">See Pets</Link></li>
              <li><Link to="/LogIn">Log In</Link></li>
              <li><Link to="/SignUp">Sign Up</Link></li>
            </ul>
            )
          }
        </div>
      </nav>
      {
        currentUser ? (
          <ul className="sidenav" id="mobile-links">
            <li><Link to="/AddPet">Add Pet</Link></li>
                <li><Link to="/PetGrid">See Pets</Link></li>
                <li><Link to="/Dashboard">Account</Link></li>
                <li onClick = {()=>{signout()}}><Link to="/">Log Out</Link></li>
         </ul>
        ) : (
          <ul className="sidenav" id="mobile-links">
            <li><Link to="/PetGrid">See Pets</Link></li>
            <li><Link to="/LogIn">Log In</Link></li>
           <li><Link to="/SignUp">Sign Up</Link></li>
        </ul>
        )
      }
   </>
  )
}

export default Navbar
