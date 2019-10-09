import React from 'react'

const Home = (props) => {

  return(
    <div className="Home" ref={props.homeRef}>
      <img src='https://rw-portfolio.s3.us-east-2.amazonaws.com/code.jpg' alt="code background" />
      <div className="content-container">
        <h1>Home Component</h1>
      </div>
    </div>
  )
}

export default Home