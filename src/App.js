import './App.css';
import React, {useState} from 'react';
import {Route, Switch} from "react-router-dom"
import NavBar from './NavBar';
import Home from './Home';
import Cart from './Cart';
import OrderFood from './OrderFood';
import Header from './Header';





function App() {
  const[cartItems, setCartItems] = useState([])
  

  

  return (
    <div>
    <Header/> 
    <NavBar/>
    <Switch>
      <Route  exact path="/cart">
        <Cart cartItems={cartItems}  />
      </Route>
      <Route exact path= "/orderfood">
        <OrderFood cartItems={cartItems} setCartItems={setCartItems} />
      </Route>
      <Route exact path ="/">
        <Home/>
      </Route>
    </Switch>
    </div>
  )
  
}

export default App;
