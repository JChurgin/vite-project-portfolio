import React from 'react';
import { BsLinkedin } from 'react-icons/Bs';
import { BsGithub } from 'react-icons/Bs';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="www.linkedin.com/in/joshua-churgin" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/JChurgin" target="_blank"><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials