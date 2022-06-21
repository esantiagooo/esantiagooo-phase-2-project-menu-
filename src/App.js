import './App.css';
import React from 'react';
import {Route, Switch} from "react-router-dom"
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import OrderFood from './OrderFood';
import Header from './Header';





function App() {

  return (
    <div>
    <Header/> 
    <NavBar/>
    <Switch>
      <Route  exact path="/about">
        <About/>
      </Route>
      <Route exact path= "/orderfood">
        <OrderFood/>
      </Route>
      <Route exact path ="/">
        <Home/>
      </Route>
    </Switch>
    </div>
  )
  
}

export default App;
