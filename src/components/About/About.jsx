import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/about_profile.svg';
import vertical from '../../assets/vertical.jpg';


const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
        <img src={vertical} alt="Profile" style={{ 
          width: '350px',  // Adjust the width
          height: '600px', // Adjust the height
          objectFit: 'cover'
          
        }} 
 />        </div>
        <div className="about-right">
            <div className="about-para">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis quod sequi corrupti adipisci blanditiis vero suscipit esse autem, accusantium aperiam?</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, enim error? Quaerat eveniet sequi error, expedita porro rerum modi dignissimos.</p>
            </div>
            <div className="about-skills">

                <div className="about-skill"><p>HTML & CSS</p> <hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>React Js</p> <hr style={{width:"80%"}} /></div>
                <div className="about-skill"><p>JavaScript</p> <hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>Next Js</p> <hr style={{width:"50%"}} /></div>

              </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>10+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>90+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>15+</h1>
            <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  )
}

export default About
