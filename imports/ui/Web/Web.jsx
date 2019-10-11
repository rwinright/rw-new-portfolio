import React from 'react'

const Web = (props) => {

  return(
    <div className="Web" ref={props.webRef}>
      <img src='https://rw-portfolio.s3.us-east-2.amazonaws.com/code.jpg' alt="code background" />
      <div className="content-container">
        <h1>Web Component</h1>
        <div className="gallery">

        </div>
        <div className="gallery-controls">
          <div className="control-arrow">
            <span>{'<'}</span>
          </div>
          <div className="control-title">

          </div>
          <div className="control-arrow">
            <span>{'>'}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Web