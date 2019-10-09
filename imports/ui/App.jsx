import React, {useRef} from 'react'
import Nav from './Components/Nav/Nav.jsx';
import Home from './Home/Home.jsx';
import Web from './Web/Web.jsx';

export default function App() {


  const homeRef = useRef(document.getElementsByClassName("Home"))
  const webRef = useRef(document.getElementsByClassName("Web"))

  return (
    <>
      <Nav homeRef={homeRef} webRef={webRef} />
      <Home homeRef={homeRef} />
      <Web webRef={webRef} />
    </>
  )
}

