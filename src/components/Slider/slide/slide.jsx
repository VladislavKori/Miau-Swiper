import React from 'react'
import {Element} from 'react-scroll';

import './slide.css'

function slide({text, id}) {
  return (
    <Element name={String(id)} id={String(id)}>
      <li className="slide">
          {text + id}
      </li>
    </Element>
  )
}

export default slide