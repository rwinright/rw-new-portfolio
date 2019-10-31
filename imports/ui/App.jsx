import React, {useRef, useState} from 'react'
import Nav from './Components/Nav/Nav.jsx';
import Home from './Home/Home.jsx';
import Web from './Web/Web.jsx';
import Mobile from './Mobile/Mobile.jsx';
import Game from './Game/Game.jsx';
import About from './About/About.jsx';
import Contact from './Contact/Contact.jsx';

export default function App() {


  const homeRef = useRef(document.getElementsByClassName("Home"))
  const webRef = useRef(document.getElementsByClassName("Web"))
  const mobileRef = useRef(document.getElementsByClassName("Mobile"))
  const gameRef = useRef(document.getElementsByClassName("Game"))
  const aboutRef = useRef(document.getElementsByClassName("About"))
  const contactRef = useRef(document.getElementsByClassName("Contact"))

  const refList = [homeRef, webRef, mobileRef, gameRef, aboutRef, contactRef];
  const [active, setActive] = useState(null);

  return (
    <>
      <Nav activeRef={active} refList={refList} setActiveRef={setActive}/>
      <Home homeRef={homeRef} />
      <Web webRef={webRef} />
      <Mobile mobileRef={mobileRef} />
      <Game gameRef={gameRef} />
      <About aboutRef={aboutRef} />
      <Contact contactRef={contactRef} />
    </>
  )
}

