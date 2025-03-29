import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    filterProducts: [],  searchval: "", catval: "",
    selectedBrands: [],   priceRange: [0, 10000] },
  reducers: {
    APPLY_FILTERS(state, action) {
      let { products, search, category, brands, priceRange } = action.payload;
      let filteredProducts = products;

      if (search) {
        filteredProducts = filteredProducts.filter(item =>
          item.title.toLowerCase().includes(search.toLowerCase())
        )}

      if (category.length > 0) {
        filteredProducts = filteredProducts.filter(item => category.includes(item.category));  }

      if (brands.length > 0) {
        filteredProducts = filteredProducts.filter(item => brands.includes(item.brand));   }

      if (priceRange) {
        filteredProducts = filteredProducts.filter(
          item => item.price >= priceRange[0] && item.price <= priceRange[1])}

      state.filterProducts = filteredProducts;
      state.searchval = search;
      state.catval = category;
      state.selectedBrands = brands;
      state.priceRange = priceRange;
    },
  }
});

export const { APPLY_FILTERS } = filterSlice.actions;
export default filterSlice;
export const selectFilters = state => state.filter.filterProducts;
export const selectSearch = state => state.filter.searchval;
export const selectCategories = state => state.filter.catval;
export const selectBrands = state => state.filter.selectedBrands;
export const selectPriceRange = state => state.filter.priceRange;
