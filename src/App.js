import React from 'react'
import Home from'./components/Home'
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
import Dashboard from './components/Dashboard'
import AddPet from './components/AddPet'
import PetGrid from './components/PetsGrid'


function App() {

  return (
    <Router>
      <div className="main">
        <Navbar/>
        <Switch>
          <Route exact={true} path="/" component={Home}/>
          <Route exact={true} path="/LogIn" component ={LogIn}/>
          <Route exact={true} path="/SignUp" component ={SignUp}/>
          <Route exact={true} path="/Dashboard" component={Dashboard}/>
          <Route exact={true} path="/AddPet" component={AddPet}/>
          <Route exact={true} path="/PetGrid" component={PetGrid}/>     
        </Switch>
      </div>
     
    </Router>
   
  );
}

export default App;
