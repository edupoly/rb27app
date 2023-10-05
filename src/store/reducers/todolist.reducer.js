import { ADDTODO } from "../actionType"

const initialState = {
    todolist:["clean car","pay bills","get bmw"]
}
function todolistReducer(state=initialState,action){
    if(action.type===ADDTODO){
        return {todolist:[...state.todolist,action.payload]}
    }
    return state
}
export default todolistReducer