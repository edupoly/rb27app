import { ADDTODO, DEC, INC } from "./actionType"
export function addTodo(newtodo){
    return {type:ADDTODO,payload:newtodo}
}
export function incCount(){
    return {type:INC}
}
export function decCount(){
    return {type:DEC}
}