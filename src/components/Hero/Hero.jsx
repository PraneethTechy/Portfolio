import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import circle from '../../assets/praneeth-profile.jpg'

const Hero = () => {
  return (
    <div id='home'  className='hero'>
      
      <div className="profile-container">
      <img className="circle-image" src={circle} alt="Profile" />
    </div>
      <h1><span>I'm Praneeth</span>     Software Engineer</h1>
      <p>I am frontend developer from Tirupati. I have worked with API integration, redux, and building responsive web applications</p>
      <div className="hero-action">
       
        <div className="hero-connect">
  <a href="https://github.com/PraneethTechy" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "white" }} >
    Git-Hub
  </a>
</div>

        <div className="hero-resume"> My Resume</div>
      </div>
    </div>
  )
}

export default Hero
