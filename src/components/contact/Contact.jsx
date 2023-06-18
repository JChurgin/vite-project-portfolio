import React from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { ImWhatsapp } from 'react-icons/im';


const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h6>joshuaschurgin@gmail.com</h6>
            <a href="mailto:joshuais13@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <AiOutlineLinkedin className='contact__option-icon'/>
            <h4>Linkedin</h4>
            <h6>Profile Page</h6>
            <a href="https://www.linkedin.com/in/joshua-churgin/" target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <ImWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h6>054-339-2927</h6>
            <a href=" https://wa.me/0543392927" target='_blank'>Send a message</a>
          </article>
        </div>
        {/*END CONTACT OPTIONS*/}
        <form action="https://formspree.io/f/mwkjndnr" method='post'>
          <input type="text" name="name" placeholder='Your Full NAme' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact