import React from 'react'
import "./experience.css"
import {AiFillCheckCircle} from "react-icons/ai"

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills</h5>
      <h2>My Experience</h2>

      <div className='container experience_container'>
        <div className='experience_basics'>
          <h3>Basics</h3>
          <div className='experience_content'>
            <article className='experience_details'><AiFillCheckCircle className="experience_details-icon"/></article>
            <div>
              <h4>HTML</h4>
              <p className='text-light'>Experienced</p>
            </div>
          </div>
          <div className='experience_content'>
            <article className='experience_details'><AiFillCheckCircle className="experience_details-icon"/></article>
            <div>
              <h4>CSS</h4>
              <p className='text-light'>Intermediate</p>
            </div>
          </div>
          <div className='experience_content'>
            <article className='experience_details'><AiFillCheckCircle className="experience_details-icon"/></article>
            <div>
              <h4>BootStrap</h4>
              <p className='text-light'>Intermediate</p>
            </div>
          </div>
        </div>
        <div className='experience_scripting'>
          <h3>Scripting</h3>
          <div className='experience_content'>
            <article className='experience_details'><AiFillCheckCircle className="experience_details-icon"/></article>
            <div>
              <h4>Java Scripts</h4>
              <p className='text-light'>Intermediate</p>
            </div>
          </div>
          <div className='experience_content'>
            <article className='experience_details'><AiFillCheckCircle className="experience_details-icon"/></article>
            <div>
              <h4>JQuery</h4>
              <p className='text-light'>Intermediate</p>
            </div>
          </div>
          <div className='experience_content'>
            <article className='experience_details'><AiFillCheckCircle className="experience_details-icon"/></article>
            <div>
              <h4>React</h4>
              <p className='text-light'>Intermediate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience