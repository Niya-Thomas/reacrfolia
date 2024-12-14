import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
  return (
   
   
   <nav>
        
        <ul className='navitem' style={{display:"flex", listStyle:"none", gap:"rem"}}>
          <h3 className='niya'>NIYA <span className='homespan'>THOMAS</span> </h3>
        <Link to="/"><li class="navlinkhome" style={{listStyle:"none"}}>Home</li></Link>
        <Link to="/About"><li class="navlink">About</li></Link>
        <Link to="/skill"><li class="navlink">Skills</li></Link>
        <Link to="/experience"><li class="navlink">Projects</li></Link> 
        <Link to="/contact"><li class="navlink">Contact</li></Link> 

            
        </ul>
    </nav>
  )
}

export default Nav