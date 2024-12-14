import React from 'react'
import './About.css'
import cartoon from './assets/cartoon.jpg'

const About = () => {
  return (
   <div className="about-container">
    <div className="text-section">
       <h1>ABOUT</h1>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sunt corporis nihil velit quibusdam molestias beatae facilis dignissimos cumque veritatis voluptas exercitationem, hic laborum culpa, eveniet libero nesciunt non consectetur.</p>
    </div>
    <div className="image-section">
        
     <img src={cartoon} alt="" />
    </div>
   </div>
  )
}

export default About