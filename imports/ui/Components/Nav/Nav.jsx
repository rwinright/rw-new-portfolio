import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCode, faMobile, faGamepad, faIdCard, faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default Nav = (props) => {

  const [navContainers, setNavContainers] = useState([]);

  getRefInfo = (refList) => {
    let refScrollHeightInfo = [];
    refList.map((r) => {
      refScrollHeightInfo.push(r.current.offsetTop)
    })
    return refScrollHeightInfo
  }

  const setActiveNavFlag = (index) => {
      navContainers.forEach((link, i)=>{
        if(i !== index){
          link.classList.remove("active");
        }
      })
      navContainers[index].classList.add("active");
  }

  compareScrollRef = (scrollPos, refData) => {
    if (scrollPos < refData[1]) {
      props.setActiveRef(props.refList[0].current);
      setActiveNavFlag(0);
    } else if (scrollPos >= (refData[1] / 2) - 30 && scrollPos < refData[2]) {
      props.setActiveRef(props.refList[1].current);
      setActiveNavFlag(1);
    } else if (scrollPos >= (refData[2] / 2) - 30 && scrollPos < refData[3]) {
      props.setActiveRef(props.refList[2].current);
      setActiveNavFlag(2);
    } else if (scrollPos >= (refData[3] / 2) - 30 && scrollPos < refData[4]) {
      props.setActiveRef(props.refList[3].current);
      setActiveNavFlag(3);
    } else if (scrollPos >= (refData[4] / 2) - 30 && scrollPos < refData[5]) {
      props.setActiveRef(props.refList[4].current);
      setActiveNavFlag(4);
    } else if (scrollPos > refData[5] - 30) {
      props.setActiveRef(props.refList[5].current);
      setActiveNavFlag(5);
    }
  }

  useEffect(() => {

    let navLinks = document.querySelectorAll(".nav-container");
    setNavContainers(navLinks)

    let scrollPos;
    let refScrollInfo = getRefInfo(props.refList);

    window.addEventListener("scroll", () => {
      scrollPos = window.scrollY;
      compareScrollRef(scrollPos, refScrollInfo);
    })

  }, []);

  const scrollToRef = (ref) => {
    props.setActiveRef(ref.current);
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }


  return (
    <div className="Nav">
      <ul>
        <li>
          <div className="nav-container active" onClick={() => scrollToRef(props.refList[0])}>
            <FontAwesomeIcon icon={faHome} />
          </div>
        </li>
        <li>
          <div className="nav-container" onClick={() => scrollToRef(props.refList[1])}>
            <FontAwesomeIcon icon={faCode} />
          </div>
        </li>
        <li>
          <div className="nav-container" onClick={() => scrollToRef(props.refList[2])}>
            <FontAwesomeIcon icon={faMobile} />
          </div>
        </li>
        <li>
          <div className="nav-container" onClick={() => scrollToRef(props.refList[3])}>
            <FontAwesomeIcon icon={faGamepad} />
          </div>
        </li>
        <li>
          <div className="nav-container" onClick={() => scrollToRef(props.refList[4])}>
            <FontAwesomeIcon icon={faIdCard} />
          </div>
        </li>
        <li>
          <div className="nav-container" onClick={() => scrollToRef(props.refList[5])}>
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
        </li>
      </ul>
    </div>
  )
}