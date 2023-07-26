import React from 'react'
import { useProductsQuery } from '../services/products'
import { useEffect } from 'react'
import { useState } from 'react'


import Grid from '@mui/material/Grid';

import About from "../components/About"

const Products = () => {
  const [products,setProducts]=useState([])

  const {data,isLoading,isFetching}=useProductsQuery()
  
  
  useEffect( ()=>{
   
    if (! (isFetching || isLoading) ){
      console.log(data?data:'Xainaaako');
    }
    else
      console.log("Loadingyar");
      setProducts(data)
     
      
  },[isFetching,isLoading])





  
return (
<>

<h1>Productbox</h1>

{products.map((prod)=>(
<div class="d-flex justify-content-around">
<div className="card" style={{width:'18rem'}}>
  <img className="card-img-top" src="..." alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title"></h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>
))}  




</>
)
}

export default Products