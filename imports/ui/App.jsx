import React, {useRef} from 'react'
import Nav from './Components/Nav/Nav.jsx';
import Home from './Home/Home.jsx';
import Web from './Web/Web.jsx';
import Mobile from './Mobile/Mobile.jsx';
import Game from './Game/Game.jsx';

export default function App() {


  const homeRef = useRef(document.getElementsByClassName("Home"))
  const webRef = useRef(document.getElementsByClassName("Web"))
  const mobileRef = useRef(document.getElementsByClassName("Mobile"))
  const gameRef = useRef(document.getElementsByClassName("Game"))

  return (
    <>
      <Nav homeRef={homeRef} webRef={webRef} mobileRef={mobileRef} gameRef={gameRef}/>
      <Home homeRef={homeRef} />
      <Web webRef={webRef} />
      <Mobile mobileRef={mobileRef}/>
      <Game gameRef={gameRef}/>
    </>
  )
}

