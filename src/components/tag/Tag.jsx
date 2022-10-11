import React from 'react'
import './tag.scss'

function Tag({title}) {
  return (
    <div className="tag">
      <p className="tag__text">#{title}</p>
    </div>
  )
}

export default Tag