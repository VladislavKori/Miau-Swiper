
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
        <div className="slide__info">
          <h1 className="slide__title">{title}</h1>
          <p className="slide__date">22.06.2022</p>  
        </div>        
      </div>

      <nav className="slide__bar">
        <SlideBar />
      </nav> 
    </li>
  )
}

export default slide