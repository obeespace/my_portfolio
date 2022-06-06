import React from 'react'
import "./contact.css"
import {AiOutlineMail} from "react-icons/ai"
import {RiMessengerLine} from "react-icons/ri"
import {BsWhatsapp} from "react-icons/bs"
import { useRef } from 'react';
import emailjs from "emailjs-com"

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7rfdysx', 'template_a2kcvvb', form.current, 'E_sBA160DotyE3DqV')
    
    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <AiOutlineMail className='contact_icons'/>
            <h4>Email</h4>
            <h5>obeewon20@gmail.com</h5>
            <a href='mailto:obeewon20@gmail.com' target="_blank">Send a message</a>
          </article>

          <article className='contact_option' target="_blank">
            <RiMessengerLine className='contact_icons'/>
            <h4>Messenger</h4>
            <h5>Ugwu Victor Obinna</h5>
            <a href='https://m.me/Obeewonn'>Send a message</a>
          </article>

          <article className='contact_option' target="_blank">
            <BsWhatsapp className='contact_icons'/>
            <h4>Whatsapp</h4>
            <h5>Ubinna Ugwu</h5>
            <a href='https://api.whatsapp.com/send?phone+2348164240480'>Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required/>
          <input type="email" name="email" placeholder="Your email" required/>
          <textarea name="message" rows="7" placeholder='Enter your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact