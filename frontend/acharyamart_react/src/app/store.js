import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import postApi from '../services/products';
import userReducer from '../features/userSlice';
import authReducer from '../features/authSlice';
import searchReducer  from '../features/searchSlice'

const store = configureStore({
  reducer: {
    [postApi.reducerPath]: postApi.reducer,
    user:userReducer,
    auth:authReducer,
    search:searchReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware),
});

export default store