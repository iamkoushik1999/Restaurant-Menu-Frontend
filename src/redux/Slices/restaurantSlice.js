import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

const API_URL = 'http://localhost:5050/api/v1/restaurant';

export const fetchRestaurants = createAsyncThunk(
  'restaurants/fetchRestaurants',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const addRestaurant = createAsyncThunk(
  'restaurants/addRestaurant',
  async (restaurant, { rejectWithValue }) => {
    try {
      const response = await axios.post(API_URL, restaurant);
      toast.success('Restaurant added successfully');
      return response.data;
    } catch (error) {
      toast.error('Failed to add restaurant');
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateRestaurant = createAsyncThunk(
  'restaurants/updateRestaurant',
  async (restaurant, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `${API_URL}/${restaurant.id}`,
        restaurant
      );
      toast.success('Restaurant updated successfully');
      return response.data;
    } catch (error) {
      toast.error('Failed to update restaurant');
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteRestaurant = createAsyncThunk(
  'restaurants/deleteRestaurant',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`${API_URL}/delete/${id}`);
      toast.success('Restaurant deleted successfully');
      return id;
    } catch (error) {
      console.log(error)
      toast.error('Failed to delete restaurant');
      return rejectWithValue(error.response.data);
    }
  }
);

const restaurantSlice = createSlice({
  name: 'restaurants',
  initialState: {
    restaurants: [],
    status: 'idle',
    createStatus: 'idle',
    updateStatus: 'idle',
    deleteStatus: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRestaurants.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRestaurants.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.restaurants = action.payload;
      })
      .addCase(fetchRestaurants.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(addRestaurant.pending, (state) => {
        state.createStatus = 'loading';
      })
      .addCase(addRestaurant.fulfilled, (state, action) => {
        state.createStatus = 'succeeded';
        state.restaurants.push(action.payload);
      })
      .addCase(addRestaurant.rejected, (state, action) => {
        state.createStatus = 'failed';
        state.error = action.payload;
      })
      .addCase(updateRestaurant.pending, (state) => {
        state.updateStatus = 'loading';
      })
      .addCase(updateRestaurant.fulfilled, (state, action) => {
        state.updateStatus = 'succeeded';
        const index = state.restaurants.findIndex(
          (r) => r.id === action.payload.id
        );
        if (index !== -1) {
          state.restaurants[index] = action.payload;
        }
      })
      .addCase(updateRestaurant.rejected, (state, action) => {
        state.updateStatus = 'failed';
        state.error = action.payload;
      })
      .addCase(deleteRestaurant.pending, (state) => {
        state.deleteStatus = 'loading';
      })
      .addCase(deleteRestaurant.fulfilled, (state, action) => {
        state.deleteStatus = 'succeeded';
        state.restaurants = state.restaurants.filter(
          (r) => r.id !== action.payload
        );
      })
      .addCase(deleteRestaurant.rejected, (state, action) => {
        state.deleteStatus = 'failed';
        state.error = action.payload;
      });
  },
});

export default restaurantSlice.reducer;
