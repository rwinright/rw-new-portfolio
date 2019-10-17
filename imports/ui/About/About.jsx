import React, { useEffect } from 'react'
import Typed from 'typed.js';

const About = (props) => {

  return(
    <div className="About" ref={props.aboutRef}>
      <img src='https://rw-portfolio.s3.us-east-2.amazonaws.com/code.jpg' alt="code background" />
      <div className="content-container">
        <h2>About me!</h2>
      </div>
    </div>
  )
}

export default About