import React, { useContext } from 'react'
import { Data } from './A'
 
function D() {
    let y=useContext(Data)
  return (
    <div>
      <h1>{y}</h1>
    </div>
  )
}

export default D
