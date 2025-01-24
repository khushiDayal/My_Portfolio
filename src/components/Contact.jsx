import React from 'react';
import { MdOutlineMailOutline } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";


const Contact = () => {
  return (
    <>
      <div className="container contact" id='contact'>
        <h1 className='contact-title'>Contact Me</h1>
        <div className="contact-icon">
          <a href='mailto:misskhushidayal@gmail.com' className="items">
             <MdOutlineMailOutline className='icons' />
          </a>
          <a href='https://github.com/khushiDayal' className="items">
             <BsGithub className='icons' />
          </a>
          <a href='https://in.linkedin.com/in/khushi-dayal-9391b7213' className="items">
             <FaLinkedin className='icons' />
          </a>
        </div>

      </div>
    </>
  )
}

export default Contact
