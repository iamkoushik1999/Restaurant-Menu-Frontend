import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

const API_URL = 'http://localhost:5050/api/v1/restaurant';

// Fetch all restaurants
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

// Fetch a single restaurant by ID
export const fetchRestaurantById = createAsyncThunk(
  'restaurants/fetchRestaurantById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Add a new restaurant
export const addRestaurant = createAsyncThunk(
  'restaurants/addRestaurant',
  async (restaurant, { rejectWithValue }) => {
    try {
      const response = await axios.post(API_URL, restaurant);
      return response.data;
    } catch (error) {
      toast.error('Failed to add restaurant');
      return rejectWithValue(error.response.data);
    }
  }
);

// Update an existing restaurant
export const updateRestaurant = createAsyncThunk(
  'restaurants/updateRestaurant',
  async (restaurant, { rejectWithValue }) => {
    try {
      console.log(restaurant);
      const response = await axios.put(
        `${API_URL}/update/${restaurant._id}`,
        restaurant
      );
      // toast.success('Restaurant updated successfully');
      return response.data;
    } catch (error) {
      toast.error('Failed to update restaurant');
      return rejectWithValue(error.response.data);
    }
  }
);

// Delete a restaurant
export const deleteRestaurant = createAsyncThunk(
  'restaurants/deleteRestaurant',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`${API_URL}/delete/${id}`);
      if (response.data.success === true) {
        return id;
      } else {
        return rejectWithValue('Failed to delete');
      }
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to delete');
    }
  }
);

const restaurantSlice = createSlice({
  name: 'restaurants',
  initialState: {
    restaurants: [],
    restaurantDetails: null,
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
      .addCase(fetchRestaurantById.fulfilled, (state, action) => {
        state.restaurantDetails = action.payload;
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
      })
      .addCase(deleteRestaurant.rejected, (state, action) => {
        state.deleteStatus = 'failed';
        state.error = action.payload;
      });
  },
});

export default restaurantSlice.reducer;
