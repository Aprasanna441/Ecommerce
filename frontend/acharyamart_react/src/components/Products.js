import React from 'react'
import { useProductsQuery } from '../services/products'
import { useEffect } from 'react'
import { useState } from 'react'


import Grid from '@mui/material/Grid';

import About from "../components/About"


const Products = () => {
  const [products, setProducts] = useState([])


  const { data, isLoading } = useProductsQuery()







  useEffect(() => {
    setProducts(data)
    console.log(data);
  }, [isLoading,data])






  return (
<>



<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="..." alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>



      <h1 style={{textAlign:'center'}}>Top Notch Products</h1>
      <div className="container">
      <div class="d-flex justify-content-around  flex-wrap">

      {products ? products.map((prod, i) => (
        <div className="card mt-5" style={{ width: '12rem' }} key={i}>
          <h5 class="card-title text-center"><strong>{prod.title}</strong></h5>
          <img src={"http://127.0.0.1:8000"+prod.image} class="img-fluid" />
            
              <div class="card-body text-center">
                
                <p><a href="{% url 'ecomapp:productinfo' product.id %}">Know More</a></p>
                <p>Price:<strike>Rs.{prod.marked_price}</strike>Rs.{prod.selling_price}</p>


                <a class="btn btn-primary" href="{% url 'ecomapp:addtocart' product.id %}">Add To Cart</a>

              </div>
            </div>
            )):<h1 style={{ textAlign: 'center' }}>Loading</h1>}

            </div>
            </div>




          </>
          )
}

          export default Products