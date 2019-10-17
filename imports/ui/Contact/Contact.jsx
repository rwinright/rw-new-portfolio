import React, { useEffect } from 'react'
import Typed from 'typed.js';

const Contact = (props) => {

  return(
    <div className="Contact" ref={props.contactRef}>
      <img src='https://rw-portfolio.s3.us-east-2.amazonaws.com/code.jpg' alt="code background" />
      <div className="content-container">
        <h2>Contact me!</h2>
      </div>
    </div>
  )
}

export default Contact