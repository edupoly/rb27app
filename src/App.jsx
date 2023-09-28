
import React, { useEffect } from 'react';
import './App.css';
import Another from './Another';

function App() {
  var firstnameRef=React.useRef();
  var lastnameRef=React.useRef();
  var addressRef=React.useRef()
 
  function checkit(e){
    if(e.key==='Enter'){
      lastnameRef.current.focus()
    }
  }
  function checkit2(e){
    if(e.key==='Enter'){
      addressRef.current.focus()
    }
  }
  useEffect(()=>{
    firstnameRef.current.focus()
  },[])
  return (
    <div className="App">
      <input type="text" ref={firstnameRef} id='d2' onKeyUp={(e)=>{checkit(e)}}/>
      <br />
      <input type="text" ref={lastnameRef} id='d3' onKeyUp={(e)=>{checkit2(e)}}/>
      <br />
      <Another ref={addressRef}></Another>
    </div>
  );
}

export default App;
