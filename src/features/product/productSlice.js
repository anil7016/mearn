import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchAllProducts,fetchProductById,fetchAllCategories,fetchAllBrands,fetchProductsByFilters } from './productAPI';

const initialState = {
  products: [],
  categories: [],
  brands: [],
  status: 'idle',
  totalItems: 0,
  selectedProduct:null
};

export const fetchAllProductsAsync = createAsyncThunk(
  'product/fetchAllProducts',
  async () => {
    const response = await fetchAllProducts();
    return response.data;
  }
);
export const fetchProductByIdAsync = createAsyncThunk(
  'product/fetchProductById',
  async (id) => {
    const response = await fetchProductById(id);
    return response.data;
  }
);

export const fetchAllCategoriesAsync = createAsyncThunk(
  'product/fetchAllCategories',
  async () => {
    const response = await fetchAllCategories();
    return response.data;
  }
);

export const fetchAllBrandsAsync = createAsyncThunk(
  'product/fetchAllBrands',
  async () => {
    const response = await fetchAllBrands();
    return response.data;
  }
);

export const fetchProductsByFiltersAsync = createAsyncThunk(
  'product/fetchProductsByFilters',
  async (filter, sort, pagination) => {
    const response = await fetchProductsByFilters(filter, sort, pagination);
    return response.data;
  }
);

export const productSlice = createSlice({
  name: 'product',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  // reducers: {
    
  // },
  extraReducers: (builder) => {
    builder
    .addCase(fetchAllProductsAsync.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
      state.status = 'idle';
      state.products = action.payload;
    })
    .addCase(fetchAllCategoriesAsync.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(fetchAllCategoriesAsync.fulfilled, (state, action) => {
      state.status = 'idle';
      state.categories = action.payload;
    })
    .addCase(fetchAllBrandsAsync.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(fetchAllBrandsAsync.fulfilled, (state, action) => {
      state.status = 'idle';
      state.brands = action.payload;
    })
    .addCase(fetchProductsByFiltersAsync.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(fetchProductsByFiltersAsync.fulfilled, (state, action) => {
      state.status = 'idle';
      state.products = action.payload.products;
      state.totalItems = action.payload.totalItems;
      console.log('state.totalItems', state.totalItems)
    })
    .addCase(fetchProductByIdAsync.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(fetchProductByIdAsync.fulfilled, (state, action) => {
      state.status = 'idle';
      state.selectedProduct = action.payload;
    });
  },
});

//export const { fetchAllProducts } = productSlice.actions;

export const selectAllproduct = (state) => state.product.products;
export const selectedProductById = (state) => state.product.selectedProduct;
export const selectAllCategory = (state) => state.product.categories;
export const selectAllBrands = (state) => state.product.brands;
export const selectTotalItems = (state) => state.product.totalItems;

export default productSlice.reducer;
