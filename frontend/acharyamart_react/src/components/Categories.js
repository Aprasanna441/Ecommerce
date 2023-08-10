import React from 'react'
import { useCategoricalProductsQuery,useCategorylistQuery } from '../services/products'
import { useEffect } from 'react'
import { useState } from 'react'



import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import Grid from '@mui/material/Grid';

import About from "../components/About"
import SearchBar from './SearchBar'


const Category = () => {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [query,setQuery]=useState("")
  
 

  const { data:productData, isLoading :isLoadingProduct}  = useCategoricalProductsQuery(query)
  const { data:categoryData, isLoading:isLoadingCategory } = useCategorylistQuery()




 



  useEffect(() => {
    
     setProducts(productData)
     
     setCategories(categoryData)
   
  }, [isLoadingProduct,productData])





  return (
<>

<FormControl sx={{marginLeft:'40%', width:'30%',textAlign:'center'}} >
  <InputLabel id="demo-simple-select-label">Select Category</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
   
    value={query}
    label="Category"
    onChange={(event)=>{setQuery(event.target.value )}}
  >
    {categories?categories.map((category,index)=>(
      <MenuItem  key ={index} value={category.title}>{category.title}</MenuItem>
    ))
    :<MenuItem value={10}>Nothing</MenuItem>}
    
   
  </Select>
</FormControl>






   {products?      <h1 style={{textAlign:'center'}}>Top {query} Products</h1>:""}
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
            )):<h1 style={{ textAlign: 'center' }}>Please Select A Category </h1>}

            </div>
            </div>




          </>
          )
}

          export default Category