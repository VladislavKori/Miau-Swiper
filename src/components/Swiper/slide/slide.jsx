
// Libs
import React from 'react'

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
      style={SLIDE_STYLES}
    >
      <h1 className="slide__title">{title}</h1>
    </li>
  )
}

export default slide