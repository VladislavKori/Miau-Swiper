
// Libs
import React from 'react'

// Styles
import './App.scss'

// Components
import { Swiper, Sidebar } from './components/imports'

// Load Data(Fake data)
import { slides } from './configs/slides'

function App() {

  return (
    <div className="wrapper">

      <Sidebar />

      <main className="content">
        <Swiper slides={slides} />
      </main>

    </div>
  )
}

export default App
