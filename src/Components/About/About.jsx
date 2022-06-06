import React from 'react'
import './About.css'
import Me from "../../Assets/me.png"
import {BsAward} from "react-icons/bs"
import {HiOutlinePresentationChartBar} from "react-icons/hi"
import {FiUsers} from "react-icons/fi"

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
            <img src={Me} alt='My photo'/>
          </div>
        </div>

        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
              <BsAward className='about_icon'/>
              <h5>Experience</h5>
              <p>6 months learning</p>
            </article>

            <article className='about_card'>
              <FiUsers className='about_icon'/>
              <h5>Clients</h5>
              <p>2 and counting</p>
            </article>

            <article className='about_card'>
              <HiOutlinePresentationChartBar className='about_icon'/>
              <h5>Projects</h5>
              <p>3 completed</p>
            </article>
          </div>

          <p>With good knowledge in Web development, creative writing, instructional designing, graphics design, I strongly believe that I am the goto for your next project</p>

          <a href='#contact' className='btn btn-primary'>Let Us Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About