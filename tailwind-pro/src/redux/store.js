import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./filterSlice";
import productSlice from "./productSlice";
import checkoutSlice from "./checkoutSlice";

const mystore = configureStore({
    reducer:{
        filter:filterSlice.reducer,
        product:productSlice.reducer,
        checkout:checkoutSlice.reducer
    }
})
export default mystore