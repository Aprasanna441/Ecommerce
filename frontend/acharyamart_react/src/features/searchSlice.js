import { createSlice } from '@reduxjs/toolkit'

export const searchSlice = createSlice({
  name: 'query',
  initialState: {
    queryText:""
  },
  //set query state
  reducers: {
  setQueryText:(state,action)=>{
  state.queryText=action.payload.queryText
  
  },
  removeQueryText:(state,action)=>{
    state.queryText=""
  }
  //next

 
  },
})

// Action creators are generated for each case reducer function
export const { setQueryText,removeQueryText} = searchSlice.actions

export default searchSlice.reducer