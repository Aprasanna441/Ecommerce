import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user_info',
  initialState: {
    email:"",
    name:""
  },
  reducers: {
  setUserInfo:(state,action)=>{
  state.email=action.payload.email 
  state.name=action.payload.name
  },
  unSetUserInfo:(state,action)=>{
    state.email=""
    state.name=""
  }
  },
})

// Action creators are generated for each case reducer function
export const { setUserInfo,unSetUserInfo} = userSlice.actions

export default userSlice.reducer