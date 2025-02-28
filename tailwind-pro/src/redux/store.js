import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./filterSlice";
import productSlice from "./productSlice";

const mystore = configureStore({
    reducer:{
        filter:filterSlice.reducer,
        product:productSlice.reducer
    }
})
export default mystore