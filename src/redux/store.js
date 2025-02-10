import { configureStore } from '@reduxjs/toolkit';
import restaurantReducer from '../redux/slices/restaurantSlice';
import categoryReducer from '../redux/slices/categorySlice';

const store = configureStore({
  reducer: {
    restaurants: restaurantReducer,
    categories: categoryReducer,
  },
});

export default store;
