import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{users:[]},
    reducers:{
        addusers : (state,action)=>{
            console.log("add users called")
            // console.log(state);
            console.log(action.payload);
        } , 
        removeuser(state,action){},
        removeallusers(state,action){}
    }
})
console.log(userSlice.actions)

export const {addusers} = userSlice.actions

export default userSlice