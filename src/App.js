import './App.css';
import Header from './Header.js';
import Cart from './Cart.js';
import Home from './Home.js';
import {  BrowserRouter as Router,  Switch,  Route } from "react-router-dom";
import styled from 'styled-components';

function App() {
  return (
    <Router>
      <AppContainer>

        <Header/>

        <Switch>
          <Route path="/cart">
            <Cart/>
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