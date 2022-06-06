import React from 'react'
import "./services.css"

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container service_container'>
        <article className='service'>
          <div className='service_head'>
            <h3>Web Development</h3>
          </div>
        </article>
        <article className='service'>
          <div className='service_head'>
            <h3>Graphics</h3>
          </div>
        </article>
        <article className='service'>
          <div className='service_head'>
            <h3>Instructional Designing</h3>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Services