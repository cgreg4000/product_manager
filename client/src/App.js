import './App.css';
import ProductForm from './components/ProductForm';
import AllProducts from './components/AllProducts';
import {useState} from 'react';
import OneProduct from './components/OneProduct';
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";

function App() {
  let [formSubmitted, setFormSubmitted] = useState(false)
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <ProductForm formSubmitted = {formSubmitted} setFormSubmitted = {setFormSubmitted}></ProductForm>
          <hr></hr>
          <AllProducts formSubmitted = {formSubmitted}></AllProducts>
        </Route>
        <Route exact path="/:id">
          <OneProduct></OneProduct>
        </Route>
        
        
      </Switch>
      
    </div>
    </BrowserRouter>
    
  );
}

export default App;
