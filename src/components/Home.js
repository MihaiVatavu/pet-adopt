import { Link } from "react-router-dom"
import M from 'materialize-css'
import {useEffect} from 'react'
import '../../src/styles/home.css'

const Home = ()=> {

  useEffect(()=>{
      var elems = document.querySelectorAll('.parallax');
      M.Parallax.init(elems);
  })
    
   return (
    <div>
       <div className="row">
          <div className="container land-container">
            <div className="col s12 m8 offset-m2 l5 main-header">
              <h1 className="" >Find your Saturday Night Date</h1>
              <Link to="/PetGrid" class="waves-effect waves-light btn-large color green accent-4"><i class="material-icons left">east</i>For Some Love</Link>
            </div>
            <div className="col s12 m8 offset-m2 l5 offset-l1">
            <img src="./assets/landing_image.png" alt="Landing woman with cat" className="circle responsive-img"/>
            </div>
          </div>
      </div>
      <div className="row">
        <div className="parallax-container">
          <div className="parallax"><img src="assets/pet-parallax_two.jpg" alt="Woman and dog"/></div>
          </div>
      </div>  
      <div class="row container">
        <div className="col s12 m8 offset-m2 l4">
          <img src="./assets/meet.png" alt="Meet your love" className="responsive-img"/>
          <h5 className="center">Love them</h5>
        </div>
       
        <div className="col s12 m8 offset-m2 l4">
          <img src="./assets/eat.png" alt="Feed" className="responsive-img"/>
          <h5 className="center">Feed them</h5>
        </div>
       
        <div className="col s12 m8 offset-m2 l4">
          <img src="./assets/Bored.png" alt="Comfort" className="responsive-img"/>
          <h5 className="center">Comfort them</h5>
        </div>
      </div>
    </div>
   )
 }
 
 export default Home
 