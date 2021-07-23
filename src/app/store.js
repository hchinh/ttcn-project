import { configureStore } from '@reduxjs/toolkit';
import adminReducer from '../features/Auth/authSlice';

const rootReducer = {
  admin: adminReducer,
  
};

const store = configureStore({
  reducer: rootReducer,
});
export default store;

