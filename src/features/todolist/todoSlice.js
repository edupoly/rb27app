import {createSlice} from '@reduxjs/toolkit'
const initialState = {
    todolist:['clean car','get bmw','clear bills']
}
export const todoSlice = createSlice({
    name:'todolist',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            state.todolist.push(action.payload)
        },
        deleteTodo:(state,action)=>{
            state.todolist.splice(action.payload,1)
        }
    }
})
export const {addTodo,deleteTodo} = todoSlice.actions;
var todoReducer = todoSlice.reducer;
export default todoReducer;