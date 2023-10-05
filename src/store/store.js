import {combineReducers,createStore} from 'redux';
import counterReducer from './reducers/counter.reducer';
import todolistReducer from './reducers/todolist.reducer';
var finalReducer = combineReducers({c:counterReducer,t:todolistReducer})

var store = new createStore(finalReducer)
export default store;