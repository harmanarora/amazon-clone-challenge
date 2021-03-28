import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import Cart from './Cart.js';
import Home from './Home.js';
import {  BrowserRouter as Router,  Switch,  Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
      <Header/>

      <Switch>
        <Route path="/cart">
          <Cart/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>

      </div>
    </Router>
  );
}

export default App;
