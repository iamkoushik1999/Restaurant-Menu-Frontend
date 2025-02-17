import { configureStore } from '@reduxjs/toolkit';
import restaurantReducer from './features/restaurantSlice';
import categoryReducer from './features/categorySlice';
import authReducer from './features/authSlice';

const store = configureStore({
  reducer: {
    restaurants: restaurantReducer,
    categories: categoryReducer,
    auth: authReducer,
  },
});

export default store;
