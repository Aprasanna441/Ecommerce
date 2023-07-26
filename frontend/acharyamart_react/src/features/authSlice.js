import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth_token',
  initialState: {
    access_token:""
  },
  reducers: {
    setUserToken :(state,action)=>{
        state.access_token=action.payload.access_token
    
        },
        unSetUserToken :(state,action)=>{
            state.access_token=""
        
            }
  },
})

// Action creators are generated for each case reducer function
export const { setUserToken,unSetUserToken } = authSlice.actions

export default authSlice.reducer