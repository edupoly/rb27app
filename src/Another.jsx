import React, { useEffect } from 'react'

var Another= React.forwardRef(function(props,r1){
    
  return (
    <div style={{border:'1px solid',padding:'10px',margin:'10px'}}>
        <h1>Another</h1>
        <input type="text" ref={r1}/>
    </div>
  )
})

export default Another