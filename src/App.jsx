
// Libs
import React from 'react'

// Styles
import './App.scss'

// Components
import { Swiper } from './components/imports'

// Load Data(Fake data)
import { slides } from './configs/slides'

function App() {

  return (
    <div className="wrapper">
      <header className="header">
        <a className="header__link" href="https://github.com/VladislavKori">Kori Dev</a>
      </header>

      <main className="content">
        <Swiper slides={slides} />
      </main>

    </div>
  )
}

export default App
