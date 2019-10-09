import React from 'react'

export default Nav = (props) => {

  const scrollToRef = (ref) =>{
    // window.scrollTo(0, ref.current.offsetTop)
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }

  return (
    <div className="Nav">
      <ul>
        <li onClick={() => scrollToRef(props.homeRef)}>H</li>
        <li onClick={() => scrollToRef(props.webRef)}>W</li>
        <li>P</li>
        <li>B</li>
        <li>C</li>
      </ul>
    </div>
  )
}