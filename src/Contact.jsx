import React from 'react'
import './Contact.css'

const Contact = () => {



  return (
   <div className="contact-container">
    <div className="contact-info">
        <h1 className='contact-me'>Contact </h1>
        <span className='span'>ME</span>
        <div className='icons'>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-linkedin"></i>
        <i class="fa-brands fa-github"></i>
        </div>

    </div>
    <div className="contact-form">
      <h1 style={{margin:"30px"}} className='h1'> CONTACT FORM </h1>
      <form action="" className='form-content'>
        <div className="name">
        <input type="text" name="" id=""  placeholder='   NAME'/>

        </div>
       <div className="mail">
       <input type="mail" name="" id=""  placeholder='    EMAIL'/>

       </div>
       <div className="number">
       <input type="tel" name="" id=""  placeholder='   PHONE NUMBER '/>

       </div>
         <div className="message">
        <input type="text" name="" id=""  placeholder='  MESSAGE'/>

        </div>
        <div className="submit">
          <button className='btn'>SUBMIT</button>
        </div>

      </form>
    </div>
   </div>
  )
}

export default Contact