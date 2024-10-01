import {createSlice} from '@reduxjs/toolkit';

const initialState={
    list:[]
}
const listReducer=createSlice({
    name:"text",
    initialState,
    reducers:{
        addListText:(state,action)=>{
            console.log("h",action.payload);
            
            state.list.push({id:Date.now(),text:action.payload})
        }
    }
})

export const {addListText}=listReducer.actions;

export default listReducer.reducer;