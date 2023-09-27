import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  function dombasedHandling(){
    var x = document.getElementById("d1").value;
    document.getElementById("he1").innerHTML=x
  }

  var [y,setY]=useState('');
  function reactbasedHandling(v){
    setY(v)
  }
  
  return (
    <div>
      <h1>Lets learn form handling in ReactJS</h1>
      <hr />
      <label htmlFor="">This is DOM based Form Element</label>
      <input type="text" onKeyUp={()=>{dombasedHandling()}} id='d1'/>
      <h1 id='he1'>You Entered:</h1>

      <hr />

      <label htmlFor="">This is ReactJS based Form Element</label>
      <input type="text" onKeyUp={(e)=>{reactbasedHandling(e.target.value)}}/>
      <h1>You Entered:{y}</h1>

    </div>
  );
}

export default App;
