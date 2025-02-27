import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
name:"filter",
initialState:{filterProducts:[] , searchval:'',catval:''},
reducers:{
    FILTER_BY_SEARCH(state,action){
        // console.log(action.payload)
        let {products,search} = action.payload
        if(search !=''){
            const filter = products.filter(item=>item.title.toLowerCase().includes(search.toLowerCase()))
            state.filterProducts = filter
        }
        state.searchval = search
    },
    FILTER_BY_CATEGORY(state,action){
        let {products,category} = action.payload
        if(category !=''){
            const filter = products.filter(item=>item.category == category)
            state.filterProducts = filter
        }
        state.catval = category
    }
}

})

export const {FILTER_BY_SEARCH,FILTER_BY_CATEGORY} = filterSlice.actions
export default filterSlice
export const selectFilters = state=>state.filter.filterProducts

export const selectSearch = state=>state.filter.searchval

export const selectCategory = state=>state.filter.catval