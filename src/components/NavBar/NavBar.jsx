import React, { useState } from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdOutlineRestaurant} from 'react-icons/md'
import {images, data} from '../../constants'
import './NavBar.css'


const NavBar = () => {
  const [tonggleMenu, setTonggleMenu] = useState(false)
  return (
    <nav className='app__navbar'>
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="gericht-logo" />
      </div>

      <ul className='app__navbar-links'>
        {data.navBarLinks.map((link, index) => (
          <li key={index} className='p__opensans'>
            <a href={`#${link.name.toLowerCase()}`}>{link.name}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-login">
        <a href="#login" className='p__opensans'>Login / Registration</a>
        <div />
        <a href="/" className='p__opensans'>Book Table</a>
      </div>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color='#fff' cursor={'pointer'} fontSize={27} onClick={() => {setTonggleMenu(true)}}/>

          {tonggleMenu && (
            <div className="app__navbar-smallscreen_overlay flex__center slide-bottom"> 
              <MdOutlineRestaurant fontSize={27} className='overlay__close' onClick={() => {setTonggleMenu(false)}} />
              <ul className='app__navbar-smallscreen-links'>
              {data.navBarLinks.map((link, index) => (
                <li key={index} className='p__opensans'>
                  <a href={`#${link.name.toLowerCase()}`}>{link.name}</a>
                </li>
              ))}
              </ul>
            </div>
          )}
          
      </div>
    </nav>
  )
}

export default NavBar