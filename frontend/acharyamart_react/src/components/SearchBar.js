import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'



const SearchBar = () => {
  
  return (
    <>
    <Box
    style={{textAlign: 'center'}}
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },backgroundColor: 'wheat'
      }}>
        <TextField id="outlined-basic" label="Enter products🔍 " variant="standard" />
     
      <Button variant="contained" color="primary">Search Products</Button>
      </Box>
     
      
    </>
  )
}

export default SearchBar