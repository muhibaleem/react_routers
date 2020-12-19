import React from "react";
import { BrowserRouter as Router } from 'react-router-dom'
import Home from "../Components/home.jsx";
import About from "../Components/about.jsx";
import Products from "../Components/products.jsx";
import Not from "../Components/not.jsx";
import Productdetails from "../Components/productdetails.jsx";
import Details from "../Components/details.jsx";
import {Routes, Route} from 'react-router-dom';
 
function App() {
  return (
    <Router>

      <div>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='about' element={<About></About>}></Route>
          <Route path='products' element={<Products></Products>}>

                <Route path='/' element={<Productdetails></Productdetails>}></Route>
                <Route path=':productID' element={<Details></Details>}></Route>

          </Route>
          <Route path='*' element={<Not></Not>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
