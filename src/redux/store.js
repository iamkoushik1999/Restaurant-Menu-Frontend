import { configureStore } from '@reduxjs/toolkit';
import restaurantReducer from './features/restaurantSlice';
import categoryReducer from './features/categorySlice';

const store = configureStore({
  reducer: {
    restaurants: restaurantReducer,
    categories: categoryReducer,
  },
});

export default store;
