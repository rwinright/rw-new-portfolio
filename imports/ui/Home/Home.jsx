import React, { useEffect } from 'react'
import Typed from 'typed.js';

const Home = (props) => {
  
  let typed

  useEffect(() => {
    
    const options = {
      strings: ['<h1>Hello, my name is <span id="name">Roger</span></h1>', '<h1>I like to build cool stuff on the Internet.</h1>'],
      smartBackspace: false,
      typeSpeed: 60
    };

    typed = new Typed('.typed', options)
  }, []);

  

  return(
    <div className="Home" ref={props.homeRef}>
      <img src='https://rw-portfolio.s3.us-east-2.amazonaws.com/code.jpg' alt="code background" />
      <div className="content-container">
        <span className="typed"/>
      </div>
    </div>
  )
}

export default Home