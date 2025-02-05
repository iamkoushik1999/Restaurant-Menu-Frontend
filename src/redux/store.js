import { configureStore } from '@reduxjs/toolkit';
import restaurantReducer from './Slices/restaurantSlice'; // Ensure correct path

const store = configureStore({
  reducer: {
    restaurants: restaurantReducer,
  },
});

export default store;
