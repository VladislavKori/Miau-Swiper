import React from 'react'

import './slider.css'

import Slide from './slide/slide'

function Slider() {

  const elemArrow = new Array(20).fill('simple text');

  return (
    <div className="slider">
      <ul className="slider__list">
        {elemArrow.map((item, index) => (
          <React.Fragment key={index}>
            <Slide text={item} />
          </React.Fragment>
        ))}
      </ul> 
    </div>
  )
}

export default Slider