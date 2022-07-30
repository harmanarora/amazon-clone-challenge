import './App.css';
import Header from './Header.js';
import Cart from './Cart.js';
import Home from './Home.js';
import {  BrowserRouter as Router,  Switch,  Route } from "react-router-dom";
import styled from 'styled-components';
import { useState, useEffect } from 'react'
import { auth, db } from './firebase.js'
import Login from './Login';

function App() {

  const [ user, setUser ] = useState(JSON.parse(localStorage.getItem('user')));

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
  //console.log("User", user);
  //console.log(!user);

  const signOut = () => {
    auth.signOut().then(()=>{
      //clears cookies
      localStorage.removeItem('user');
      
      setUser(null);
    })
  }

  const [searchKey, setSearchKey] = useState(null);

  const handleSearch = (e) => {
    setSearchKey(e.target.value);
    // console.log(e.target.value);
  }

  return (
    <Router>
      {
        !user ? (
          <Login setUser={setUser}/>
        ):(
          <AppContainer>

            <Header
              signOut={signOut}
              user={user} 
              cartItems={cartItems}
              handleSearch={handleSearch}
            />

            <Switch>

              <Route path="/cart">
                <Cart cartItems = {cartItems}/>
              </Route>

              <Route path="/">
                <Home searchKey={searchKey} />
              </Route>
            
            </Switch>

          </AppContainer>
        )
      }
    </Router>
  );
}

export default App;

const AppContainer = styled.div`
  background-color: #EAEDED;
`