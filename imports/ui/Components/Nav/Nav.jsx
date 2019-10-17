import React from 'react'

export default Nav = (props) => {

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }

  return (
    <div className="Nav">
      <ul>
        <li>
          <div className="nav-container" onClick={() => scrollToRef(props.homeRef)}>
            <span>H</span>
          </div>
        </li>
        <li>
          <div className="nav-container" onClick={() => scrollToRef(props.webRef)}>
            <span>W</span>
          </div>
        </li>
        <li>
          <div className="nav-container" onClick={() => scrollToRef(props.mobileRef)}>
            <span>M</span>
          </div>
        </li>
        <li>
          <div className="nav-container" onClick={() => scrollToRef(props.gameRef)}>
            <span>G</span>
          </div>
        </li>
        <li>
          <div className="nav-container" onClick={() => scrollToRef(props.aboutRef)}>
            <span>H</span>
          </div>
        </li>
        <li>
          <div className="nav-container" onClick={() => scrollToRef(props.contactRef)}>
            <span>H</span>
          </div>
        </li>
      </ul>
    </div>
  )
}