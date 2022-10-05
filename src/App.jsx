import React from 'react'
import './App.css'

import { Slider } from './components/imports'

function App() {

  return (
    <div className="wrapper">
      <aside className="sidebar">
         Smt. sidebar content
      </aside>

      <div className="container">
        <Slider />
      </div>

    </div>
  )
}

export default App
