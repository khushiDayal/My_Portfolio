import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className="container nav_bar">
        <div className="left nav_items">Portfolio</div>
        <div className="right">
            <a href="#home" className="nav_items">Home</a>
            <a href="#projects" className="nav_items">Projects</a>
            <a href="#skills" className="nav_items">Skills</a>
            <a href="#contact" className="nav_items">Contact</a>
        </div>
      </div>
    </>
  )
}

export default Navbar
