
// Libs
import React from 'react'
import SlideBar from '../slideBar/SlideBar'

// Styles
import './slide.scss'

function slide({preview, title}) {

  const SLIDE_STYLES = {
    background: `url('${preview}')`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }

  return (
    <li 
      className="slide"
    >
      <div
        className="slide__content"
        style={SLIDE_STYLES}
      >
        <h1 className="slide__title">{title}</h1>        
      </div>

      <nav className="slide__bar">
        <SlideBar />
      </nav> 
    </li>
  )
}

export default slide