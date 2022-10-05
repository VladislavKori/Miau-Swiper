import React, { useEffect, useRef, useState } from 'react'
import Scroll from 'react-scroll'

import './slider.css'

import Slide from './slide/slide'

let scroller = Scroll.scroller

function Slider() {

  const currentSlide = useRef(0)
  const sliderScroll = useRef(null);
  const nowIsScroll = useRef(false)
  const nowPositionY = useRef(0)

  useEffect(() => {

    const listener = sliderScroll.current.addEventListener('scroll', async (e) => {

      if (nowIsScroll.current === true) {
        console.log('scroll not avaible')
        return false
      } else {
        nowIsScroll.current = true
        currentSlide.current = currentSlide.current + 1;
        const result = await scrollToElement(currentSlide.current)
        if (result === true) {
          nowIsScroll.current = false
        }
      }

      console.log(nowIsScroll.current)
    })

    return () => removeEventListener('scroll', listener)

  }, [])


  const scrollToElement = async (elem) => {
    await scroller.scrollTo(String(elem), {
      duration: 800,
      smooth: 'easeInOutQuart',
      containerId: "container"
    })
    return true
  }


  // Fake data
  const elemArrow = new Array(20).fill('simple text');

  return (
    <div className="container" id="container" ref={sliderScroll}>
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