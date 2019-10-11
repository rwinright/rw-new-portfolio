import React from 'react'

const Mobile = (props) => {

  return(
    <div className="Mobile" ref={props.mobileRef}>
      <img src='https://rw-portfolio.s3.us-east-2.amazonaws.com/code.jpg' alt="code background" />
      <div className="content-container">
        <h1>Mobile Component</h1>
      </div>
    </div>
  )
}

export default Mobile