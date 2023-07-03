import React from 'react'

import { SubHeading } from '../../components'
import { images, data } from '../../constants'
import './Laurels.css'

const AwardCard =({award: {imgUrl, title, subtitle}}) => {
  return (
    <div className='app__laurels_awrad-card'>
      <img src={imgUrl} alt={`award-${title}`} />
      <div className='app__laurels_awrad-card_content'>
        <p className='p__cormorant' style={{color: '#DCC187'}}>{title}</p>
        <p className='p__opensans'>{subtitle}</p>
      </div>
    </div>
  )
}

const Laurels = () => {
  return (
    <div className='app__bg app__wrapper section__padding' id='awards'>
      <div className="app__wrapper_info">
        <SubHeading title='Awards & Recognition' />
        <h1 className='headtext__cormorant'>Our Laurels</h1>

        <div className="app__laurels_award">
          {data.awards.map((award, index) => (<AwardCard award ={award} key={index}/> ))}
        </div>
      </div>
      <div className="app__wrapper_img">
          <img src={images.laurels} alt='laurels' />
      </div>
    </div>
  )
}

export default Laurels