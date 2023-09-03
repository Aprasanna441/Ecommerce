import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import { useDispatch } from 'react-redux';
import {setQueryText,removeQueryText  } from '../features/searchSlice'
import { useSelector } from 'react-redux';




const SearchBar = () => {
  const dispatch=useDispatch()
  


  const searchText=(e)=>{
    e.preventDefault()   
    const data = new FormData(e.currentTarget);
    const actualData = {
      string: data.get("string"),      
    };
    dispatch(setQueryText({queryText:actualData.string}))

  }

  return (
    <>
    
    <Box style={{textAlign: 'center'}}
      component="form" 
      onSubmit={searchText}
      
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },backgroundColor: 'wheat',
      }}>
        <TextField id="outlined-basic" name='string' onChange={(e)=>{e.target.value == ""? dispatch(removeQueryText()): console.log("") }} label="Enter products🔍 " variant="filled" />

      </Box>
     
     
      
    </>
  )
}

export default SearchBar