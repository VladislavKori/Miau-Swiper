import React, { useEffect, useRef, useState } from 'react'
import Scroll from 'react-scroll'

import './slider.css'

import Slide from './slide/slide'

// let scroll    = Scroll.animateScroll;
let scroller = Scroll.scroller

function Slider() {

  const scrollToElement = (elem) => {
    console.log('scroll..')
    scroller.scrollTo(String(elem), {
      duration: 800,
      smooth: 'easeInOutQuart',
      containerId: "container"
    })
  }

  const elemArrow = new Array(20).fill('simple text');

  return (
    <div className="container" id="container">
      <div className="slider" >
        {/* <button onClick={() => scrollToElement(1)}>scroll bot</button> */}
        <ul className="slider__list">
          {elemArrow.map((item, index) => (
            <React.Fragment key={index}>
              <Slide text={item} id={index} />
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Slider