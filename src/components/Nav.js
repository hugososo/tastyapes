import './Nav.css';
import React from 'react'
import logo from '../assets/logo.png'

const Nav = () => {

  return (
    <div className="navbar-container" data-aos="fade-down" data-aos-duration="700">
      <div className="navbar">
        <img src={logo} alt="logo" className="mainlogo"/>
        <a href="#mint" className="nav-item">Mint</a>
        <a href="#about" className="nav-item">About</a>
        <a href="#roadmap" className="nav-item">Roadmap</a>
        <a href="#team" className="nav-item">Team</a>
      </div>
    </div>
  );
}

export default Nav;
