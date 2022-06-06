import React from 'react'
import "./footer.css"
import {BsFacebook} from "react-icons/bs"
import {BsTwitter} from "react-icons/bs"
import {BsInstagram} from "react-icons/bs"


const Footer = () => {
  return (
    <footer>
      <a href='' className='footer_logo'>Obee</a>

      <ul className='links'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer_socials'>
        <a href='https://www.facebook.com/Obeewonn' target="_blank"><BsFacebook /></a>
        <a href='https://twitter.com/obeelity' target="_blank"><BsTwitter /></a>
        <a href='https://instagram.com/0beenna' target="_blank"><BsInstagram /></a>
      </div>

      <div className='footer_copyright'>
        <p>&copy Obeespace. All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer