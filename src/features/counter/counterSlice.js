import {createSlice} from '@reduxjs/toolkit'
const initialState={
    count:0
}
export const counterSlice=createSlice({
    name:"counter",
    initialState,
    reducers:{
        inc:(state,action)=>{
            state.count++
        },
        dec:(state)=>{
            state.count--;
        }
    }
})
export var {inc,dec} = counterSlice.actions;
export default counterSlice.reducer;