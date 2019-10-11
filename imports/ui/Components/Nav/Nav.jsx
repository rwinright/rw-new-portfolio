import React from 'react'

export default Nav = (props) => {

  const scrollToRef = (ref) => {
    // window.scrollTo(0, ref.current.offsetTop)
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
            <span>H</span>
          </div>
        </li>
        <li>
          <div className="nav-container" onClick={() => scrollToRef(props.mobileRef)}>
            <span>H</span>
          </div>
        </li>
        <li>
          <div className="nav-container">
            <span>H</span>
          </div>
        </li>
        <li>
          <div className="nav-container">
            <span>H</span>
          </div>
        </li>
        <li>
          <div className="nav-container">
            <span>H</span>
          </div>
        </li>
      </ul>
    </div>
  )
}