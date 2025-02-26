import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./filterSlice";

const mystore = configureStore({
    reducer:{
        filter:filterSlice.reducer
    }
})
export default mystore