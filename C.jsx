import React, { useContext } from 'react'
import { Data } from './A'
 
function C() {
    var abc=useContext(Data)
  return (
    <div>
      <h1>C {abc}</h1>
    </div>
  )
}

export default C
