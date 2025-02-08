import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

const API_URL = 'http://localhost:5050/api/v1/category';

// Fetch categories by restaurant ID
export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async (restaurantId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/${restaurantId}`);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || 'Failed to fetch categories'
      );
    }
  }
);

// Add category
export const addCategory = createAsyncThunk(
  'categories/addCategory',
  async (category, { rejectWithValue }) => {
    try {
      const response = await axios.post(API_URL, category);
      toast.success('Category added successfully');
      return response.data;
    } catch (error) {
      toast.error('Failed to add category');
      return rejectWithValue(error.response?.data || 'Failed to add category');
    }
  }
);

// Update category
export const updateCategory = createAsyncThunk(
  'categories/updateCategory',
  async ({ restaurantId, category }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `${API_URL}/update/${restaurantId}`,
        category
      );
      toast.success('Category updated successfully');
      return response.data;
    } catch (error) {
      toast.error('Failed to update category');
      return rejectWithValue(
        error.response?.data || 'Failed to update category'
      );
    }
  }
);

// Delete category
export const deleteCategory = createAsyncThunk(
  'categories/deleteCategory',
  async ({ restaurantId, categoryId }, { rejectWithValue }) => {
    try {
      await axios.delete(`${API_URL}/delete/${restaurantId}`, {
        data: { categoryId },
      });
      toast.success('Category deleted successfully');
      return categoryId;
    } catch (error) {
      toast.error('Failed to delete category');
      return rejectWithValue(
        error.response?.data || 'Failed to delete category'
      );
    }
  }
);

const categorySlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(addCategory.fulfilled, (state, action) => {
        state.categories.push(action.payload);
      })
      .addCase(updateCategory.fulfilled, (state, action) => {
        const index = state.categories.findIndex(
          (c) => c._id === action.payload._id
        );
        if (index !== -1) {
          state.categories[index] = action.payload;
        }
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.categories = state.categories.filter(
          (c) => c._id !== action.payload
        );
      });
  },
});

export default categorySlice.reducer;
