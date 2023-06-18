import React from 'react';
import './footer.css';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiOutlineGithub } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Joshua Churgin</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        {/* <li><a href="#services">Services</a></li> */}
        <li><a href="#protfolio">Portfolio</a></li>
        <li><a href="#recommendation">Recommendation</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="www.linkedin.com/in/joshua-churgin"><AiFillLinkedin/></a>
        <a href="https://github.com/JChurgin"><AiOutlineGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Joshua Churgin, All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer