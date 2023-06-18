import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiOutlineGithub } from 'react-icons/ai';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="www.linkedin.com/in/joshua-churgin" target="_blank"><AiFillLinkedin/></a>
        <a href="https://github.com/JChurgin" target="_blank"><AiOutlineGithub/></a>
    </div>
  )
}

export default HeaderSocials