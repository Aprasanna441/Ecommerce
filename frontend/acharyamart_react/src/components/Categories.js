import React from 'react'
import { useProductsQuery } from '../services/products'
import { useEffect } from 'react'
import { useState } from 'react'
 import slide1 from '../media/slide1.jpg'
 import slide2 from '../media/slide2.jpg'
import slide3 from  '../media/slide2.jpg'
import $ from 'jquery'
import { Button } from '@mui/material'


import Grid from '@mui/material/Grid';

import About from "../components/About"
import SearchBar from './SearchBar'


const Category = () => {
  const [products, setProducts] = useState([])


  const { data, isLoading } = useProductsQuery()



 



  useEffect(() => {
    
     setProducts(data)
    console.log(data);
  }, [isLoading,data])





  return (
<>

<SearchBar/>





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
            )):<h1 style={{ textAlign: 'center' }}>Loading </h1>}

            </div>
            </div>




          </>
          )
}

          export default Category