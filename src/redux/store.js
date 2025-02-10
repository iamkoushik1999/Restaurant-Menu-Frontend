import { configureStore } from '@reduxjs/toolkit';
import restaurantReducer from './slices/restaurantSlice';
import categoryReducer from './slices/categorySlice';

const store = configureStore({
  reducer: {
    restaurants: restaurantReducer,
    categories: categoryReducer,
  },
});

export default store;
