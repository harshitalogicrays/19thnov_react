import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
//api calling using async thunk 
export const fetchorders =  createAsyncThunk("order/fetchorders",async(_,thunkAPI)=>{
    try{
        const res = await fetch("https://67ce5dd3125cd5af757a41a2.mockapi.io/orders")
        const data1 =  await res.json()
         return data1 }
      catch(err){return thunkAPI.rejectWithValue(err)}
})


const orderSlice = createSlice({
    name:"order",
    initialState:{orders:[],error:''},
    reducers:{
        allorders(state,action){
            state.orders = action.payload }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchorders.pending,(state,action)=>{state.orders=[]})
               .addCase(fetchorders.fulfilled,(state,action)=>{state.orders = action.payload})
               .addCase(fetchorders.rejected,(state,action)=>{state.error =  action.payload})
    }
})
export default orderSlice
export const {allorders} = orderSlice.actions
export const selectorders = state=>state.order.orders
export const selectErrors = state=>state.order.error
