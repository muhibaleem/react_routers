import React from "react";
import Home from "./Components/home.jsx";
import { BrowserRouter } from 'react-router-dom'
import About from "./Components/about.jsx";
import Products from "./Components/products.jsx";
import Not from "./Components/not.jsx";
import Productdetails from "./Components/productdetails.jsx";
import Details from "./Components/details.jsx";
import { Link, Routes, Route } from 'react-router-dom';
import Navbar from './Components/navbar.jsx'
// import RouterJS from "./Config/router.jsx";



function App() {
  return (
    <BrowserRouter >

      <h1>App.js page</h1>


      <Navbar />

      {/* <RouterJS/> */}



      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='about' element={<About></About>}></Route>
        <Route path='products' element={<Products></Products>}>

          <Route path='/' element={<Productdetails></Productdetails>}></Route>
          <Route path=':productID' element={<Details></Details>}></Route>

        </Route>
        <Route path='*' element={<Not></Not>}></Route>
      </Routes>



    </BrowserRouter>
  );
}

export default App;
