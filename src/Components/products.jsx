import React from "react";
import { Outlet } from "react-router-dom";



function Products() {

  

  return (
    <div >

      <h1>Products Page</h1>

      <Outlet></Outlet>


    </div>
  );
}

export default Products;
