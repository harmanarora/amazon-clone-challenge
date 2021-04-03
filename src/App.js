import './App.css';
import Header from './Header.js';
import Cart from './Cart.js';
import Home from './Home.js';
import {  BrowserRouter as Router,  Switch,  Route } from "react-router-dom";
import styled from 'styled-components';
import { useState, useEffect } from 'react'
import { db } from './firebase.js'

function App() {

  const [ cartItems, setCartItems ] = useState([]);

  const getCartItems = () => {
    //live db connection
    db.collection('cartItems').onSnapshot((snapshot)=>{
      const tempItems = snapshot.docs.map((doc) => ({
        id : doc.id,
        product: doc.data()
      }))

      //updates the state
      setCartItems(tempItems);
    })
  }

  useEffect(() => {
    getCartItems();
    //empty below as only needed for 1st page load - any object in there when refreshed will useEffect
  }, [])

  //console.log(cartItems);

  return (
    <Router>
      <AppContainer>

        <Header cartItems = {cartItems}/>

        <Switch>
          <Route path="/cart">
            <Cart cartItems = {cartItems}/>
          </Route>

          <Route path="/">
            <Home/>
          </Route>
        </Switch>

      </AppContainer>
    </Router>
  );
}

export default App;

const AppContainer = styled.div`
  background-color: #EAEDED;
`