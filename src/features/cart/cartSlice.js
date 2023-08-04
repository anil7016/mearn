import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addToCart, fetchItemByUserId } from './cartAPI';

const initialState = {
  items: [],
  status: 'idle',
};

export const fetchItemByUserIdAsync = createAsyncThunk(
  'counter/fetchItemByUserId',
  async (userId) => {
    const response = await fetchItemByUserId(userId);
    return response.data;
  }
);

export const addToCartAsync = createAsyncThunk(
  'counter/addToCart',
  async (item) => {
    console.log('item-slice', item)
    const response = await addToCart(item);
    return response.data;
  }
);

export const cartSlice = createSlice({
  name: 'counter',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchItemByUserIdAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchItemByUserIdAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items = action.payload;
      })
      .addCase(addToCartAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addToCartAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items.push(action.payload);
      });
  },
});


export const selectItems = (state) => state.cart.items;

export default cartSlice.reducer;
