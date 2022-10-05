import React from 'react'

import './slide.css'

function slide({text, id}) {
  return (
      <li className="slide">
          {text + id}
      </li>
  )
}

export default slide