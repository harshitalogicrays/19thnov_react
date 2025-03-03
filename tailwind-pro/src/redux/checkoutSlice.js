import { createSlice } from "@reduxjs/toolkit";

const checkoutSlice = createSlice({
    name:"checkout",
    initialState:{shippingAddress:{}},
    reducers:{
        storeShippingAddress(state,action){
            state.shippingAddress = action.payload
        }
    }
})
export const {storeShippingAddress} = checkoutSlice.actions
export default checkoutSlice
export const selectShipping = state=>state.checkout.shippingAddress