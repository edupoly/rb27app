import React, { useState } from 'react'
import {connect} from 'react-redux'
import { addTodo, decCount, incCount } from '../store/actions';
function Counter(props) {
    console.log(props)
    var [newtodo,setNewtodo]=useState('');
    return (
      <div className='mybox'>
          <input type="text" onChange={(e)=>{setNewtodo(e.target.value)}}/>
          <button onClick={()=>{props.dispatch(addTodo(newtodo))}}>Add Todo</button>
          <hr />
          <h1>Counter:{props.c.count}</h1>
          <button onClick={()=>{props.dispatch(incCount())}}>Increment</button>
          <button onClick={()=>{props.dispatch(decCount())}}>Decrement</button>
      </div>
    )
}

export default connect(function(store){return store})(Counter);//currying