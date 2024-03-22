import React, { useState } from 'react'

function Abc() {
    let [isactive, setIsactive]=useState(true)
  return (
    <div>
      <h1 className={(isactive? ' ': 'hide')}>This is demo</h1>
      <button onClick={()=>setIsactive(!isactive)}>Toggle</button>
    </div>
  )
}

export default Abc
