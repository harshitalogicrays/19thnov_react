import { createSlice,nanoid } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{users:[],error:''},
    reducers:{
        addusers : (state,action)=>{
            // console.log(action.payload);
            state.users.push({...action.payload , id:nanoid() ,  createdAt:new Date()})
        } , 
        removeuser(state,action){ //action.payload is id 
            // let filters =  state.users.filter((user)=>user.id !=action.payload)
            // state.users = filters
            
            let itemIndex = state.users.findIndex(user=>user.id==action.payload)
            state.users.splice(itemIndex,1)
        },
        removeallusers(state,action){
            state.users=[]
        }
    }
})
console.log(userSlice.actions)

export const {addusers,removeallusers,removeuser} = userSlice.actions
export default userSlice
export const selectUsers = (state)=>state.user.users