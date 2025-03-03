import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
//api calling using async thunk 
export const fetchProducts =  createAsyncThunk("product/fetchProducts",async(_,thunkAPI)=>{
    try{
        const res = await fetch("https://67b69e6007ba6e5908412007.mockapi.io/products")
        const data1 =  await res.json()
         return data1 }
      catch(err){return thunkAPI.rejectWithValue(err)}
})


const productSlice = createSlice({
    name:"product",
    initialState:{products:[],error:''},
    reducers:{
        allproducts(state,action){
            state.products = action.payload }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.pending,(state,action)=>{state.products=[]})
               .addCase(fetchProducts.fulfilled,(state,action)=>{state.products = action.payload})
               .addCase(fetchProducts.rejected,(state,action)=>{state.error =  action.payload})
    }
})
export default productSlice
export const {allproducts} = productSlice.actions
export const selectProducts = state=>state.product.products
export const selectErrors = state=>state.product.error
