
// Libs
import React from 'react'

// Styles
import './swiper.scss'

// Components
import Slide from '../slide/slide'

function Swiper({slides}) {

  let data = null;

  // processing data
  data = slides
  /*
  *   slides consist: 
  *     preview: img string url
  *     title: text string
  */   


  return (
    <div className="swiper" >
      <ul className="swiper__list">
        {data.map((item, index) => (
          <React.Fragment key={index}>
            <Slide
              preview={item.preview}
              title={item.title}
            />
          </React.Fragment>
        ))}

      </ul>
    </div>
  )
}

export default Swiper