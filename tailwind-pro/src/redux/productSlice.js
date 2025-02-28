import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const productSlice = createSlice({
    name:"product",
    initialState:{products:[]},
    reducers:{
        allproducts(state,action){
            console.log(action.payload)
            state.products = action.payload
        }
    }
})
export const {allproducts} = productSlice.actions
export default productSlice
export const selectProducts = state=>state.product.products