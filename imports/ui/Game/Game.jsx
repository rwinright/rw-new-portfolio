import React from 'react'

const Game = (props) => {

  return(
    <div className="Game" ref={props.gameRef}>
      <img src='https://rw-portfolio.s3.us-east-2.amazonaws.com/code.jpg' alt="code background" />
      <div className="content-container">
        <h1><span>Game </span>Component</h1>
        <div className="gallery">

        </div>
        <div className="gallery-controls">
          <div className="control-arrow">
            <span>{'<'}</span>
          </div>
          <div className="control-title">
            <h2>Sample Game</h2>
          </div>
          <div className="control-arrow">
            <span>{'>'}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Game