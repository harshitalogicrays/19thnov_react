import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./filterSlice";
import productSlice from "./productSlice";
import checkoutSlice from "./checkoutSlice";
import orderSlice from "./orderSlice";

const mystore = configureStore({
    reducer:{
        filter:filterSlice.reducer,
        product:productSlice.reducer,
        checkout:checkoutSlice.reducer,
        order:orderSlice.reducer
    }
})
export default mystore