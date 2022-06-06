import React from 'react'
import "./testimonials.css"
import Nze from "../../Assets/nzes.jpg"
import Aja from "../../Assets/aja.jpg"

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const testidata = [
  {
    id: 1,
    name: "Arinze Umeh",
    image: Nze,
    review: "Amazing and yet not so distracting builds. I recommend this developer to everybody craving a software solution",
  },

  {
    id: 2,
    name: "Aja Maurice",
    image: Aja,
    review: "Simple yet very stylish and professional in the way he carries out his duties",
  }
]

const Testimonials = () => {
  const showdata = testidata.map(function(data){
    return (
      <SwiperSlide className='testimonial'>
        <div className='client_img'>
          <img src={data.image} alt='client image'/>
        </div>
        <h5 className='client_name'>{data.name}</h5>
        <p className='client_review'>{data.review}</p>
      </SwiperSlide>
    )
  })
  return (
    <section id='testimonials'>
      <h5>Reviews</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonial_container' 
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}>
        {showdata}
      </Swiper>
    </section>
  )
}

export default Testimonials