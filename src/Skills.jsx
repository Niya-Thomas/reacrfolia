import React from "react";
import './Skills.css'

const Skills = () => {
  return (
    <div className="body">
      <div className="heading">
      <h1 className="name">MY SKILLS</h1>

      </div>
     <div className="skil-container">
         <div className="section1">
         <h2>HTML</h2>
         <div className="progress mb-3">
            <div
              className="progress-bar bg-warning"
              role="progressbar"
              style={{ width: "50%" }}
              aria-valuenow="85"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              85%
            </div>
          </div>
          <h2>CSS</h2>
         <div className="progress mb-3">
            <div
              className="progress-bar bg-warning"
              role="progressbar"
              style={{ width: "50%" }}
              aria-valuenow="85"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              85%
            </div>
          </div>
          <h2>JAVASCRIPT</h2>
         <div className="progress mb-3">
            <div
              className="progress-bar bg-warning"
              role="progressbar"
              style={{ width: "50%" }}
              aria-valuenow="85"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              70%
            </div>
          </div>
         </div>


         <div className="section2">
         <h2>PYTHON</h2>
         <div className="progress mb-3">
            <div
              className="progress-bar bg-warning"
              role="progressbar"
              style={{ width: "85%" }}
              aria-valuenow="85"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              80%
            </div>
          </div>
          <h2>REACT</h2>
         <div className="progress mb-3">
            <div
              className="progress-bar bg-warning"
              role="progressbar"
              style={{ width: "50%" }}
              aria-valuenow="85"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              80%
            </div>
          </div><h2>BOOTSTRAP</h2>
         <div className="progress mb-3">
            <div
              className="progress-bar bg-warning"
              role="progressbar"
              style={{ width: "50%" }}
              aria-valuenow="85"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              95%
            </div>
          </div>

         </div>



         <div className="section3">
         <h2>MYSQL</h2>
         <div className="progress mb-3">
            <div
              className="progress-bar bg-warning"
              role="progressbar"
              style={{ width: "70%" }}
              aria-valuenow="85"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              90%
            </div>
          </div>
          <h2>ANDROID</h2>
         <div className="progress mb-3">
            <div
              className="progress-bar bg-warning"
              role="progressbar"
              style={{ width: "50%" }}
              aria-valuenow="85"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              60%
            </div>
          </div><h2>Django/Flask</h2>
         <div className="progress mb-3">
            <div
              className="progress-bar bg-warning"
              role="progressbar"
              style={{ width: "50%" }}
              aria-valuenow="85"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              75%
            </div>
          </div>
         </div>
       </div>
      
    </div>
  );
};

export default Skills;
