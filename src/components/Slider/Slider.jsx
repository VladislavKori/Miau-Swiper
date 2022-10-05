import React, { useEffect, useRef } from 'react'

import './slider.css'

import Slide from './slide/slide'

function Slider() {

  const slider = useRef(null)

  useEffect(() => {
    const innerSlider = slider.current;
    const sliderListener = innerSlider.addEventListener('click', e => {
      console.log(e)
    })

    return () => removeEventListener('click', sliderListener)
  }, [])

  const elemArrow = new Array(20).fill('simple text');

  return (
    <div className="container" ref={slider}>
      <div className="slider" >
        <ul className="slider__list">
          {elemArrow.map((item, index) => (
            <React.Fragment key={index}>
              <Slide text={item} />
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Slider