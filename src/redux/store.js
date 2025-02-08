import { configureStore } from '@reduxjs/toolkit';
import restaurantReducer from './slices/restaurantSlice'; // Ensure correct path
import categoryReducer from './slices/categorySlice'; // Ensure correct path

const store = configureStore({
  reducer: {
    restaurants: restaurantReducer,
    categories: categoryReducer,
  },
});

export default store;
