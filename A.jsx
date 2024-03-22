import React from 'react'
import { createContext } from 'react'
import B from './B'
import C from './C'
import D from './D'

export let Data=createContext()
function A() {
  return (
    <div>
      <Data.Provider value={'sajan kafle'}>
        <h1>A</h1>
        <B/>
        <C/>
      </Data.Provider>
    </div>
  )
}

export default A
