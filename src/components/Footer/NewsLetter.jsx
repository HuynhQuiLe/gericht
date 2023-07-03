import React from 'react'
import SubHeading from '../SubHeading/SubHeading'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='app__newsLetter'>
      <div className="app__newsLetter-heading">
        <SubHeading title='Newsletter' />
        <h1 className='headtext__cormorant'>Subscribe To Our Newsletter</h1>
        <p className='p__opensans'>And Never Miss Latest Updates!</p>
      </div>
      <div className="app__newsLetter-input flex__center">
        <input type="email" placeholder='Enter your email address' />
        <button className='custom__button' type="submit">Subsribe</button>
      </div>
    </div>
  )
}

export default NewsLetter