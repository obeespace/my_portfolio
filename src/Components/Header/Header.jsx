import React from 'react'
import "./header.css"
import CV from "../../Assets/cv.pdf"
import Photo from "../../Assets/me.png"
import {FaLinkedin} from "react-icons/fa"
import {BsGithub} from "react-icons/bs"
import {BsTwitter} from "react-icons/bs"

const Header = () => {
  return (
    <header>
      <div className = "container header__container">
        <h5>Hello I'm</h5>
        <h1>Obinna Ugwu</h1>
        <h5 className='text-light'>Front End React Developer</h5>
        <br />
        <a href={CV} download className='btn'>Download CV</a>
        <a href='#contact' className='btn btn-primary'>Contact Me</a>
        
        <div className='me'>
          <img src={Photo} alt="my_photo"/>
        </div>

        <a href="#contact" className ="scroll_down">Scroll Down</a>

        <div className='header__socials'>
          <a href='https://github.com/obeespace' target="_blank"><BsGithub /></a>
          <a href='https://linkedin.com/in/obinna-ugwu-04b0a617b' target="_blank"><FaLinkedin/></a>
          <a href='https://twitter.com/obeelity' target="_blank"><BsTwitter /></a>
        </div> 
      </div>
    </header>
  )
}

export default Header