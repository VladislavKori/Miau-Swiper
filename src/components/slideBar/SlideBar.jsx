import React from 'react'

import './slidebar.scss'

// Icons
import {ReactComponent as ShareIcon} from '../../assets/share.svg';
import {ReactComponent as MessageIcon} from '../../assets/message.svg';
import {ReactComponent as HeartIcon} from '../../assets/heart.svg';

function SlideBar() {
  return (
    <div className="slidebar">
      <ul className="slidebar__list">
        <li className="slidebar__item">
          {/* slidebar__heart_active */}
          <HeartIcon className="slidebar__icon slidebar__icon_heart" />
          <p className="slidebar__value">1k</p>
        </li>

        <li className="slidebar__item">
          <MessageIcon className="slidebar__icon" />
          <p className="slidebar__value">100+</p>
        </li>

        <li className="slidebar__item">
          <ShareIcon className="slidebar__icon" />
          <p className="slidebar__value">100</p>
        </li>
      </ul>
    </div>
  )
}

export default SlideBar