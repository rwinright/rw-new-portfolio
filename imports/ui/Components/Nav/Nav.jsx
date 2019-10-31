import React, {useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCode, faMobile, faGamepad, faIdCard, faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default Nav = (props) => {

  getRefInfo = (refList) => {
    let refScrollHeightInfo = [];
    refList.map((r)=>{
      refScrollHeightInfo.push(r.current.offsetTop)
    })
    return refScrollHeightInfo
  }
  
  useEffect(() => {
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
          <div className="nav-container" onClick={() => scrollToRef(props.refList[0])}>
            <FontAwesomeIcon icon={faHome}/>
          </div>
        </li>
        <li>
          <div className="nav-container" onClick={() => scrollToRef(props.refList[1])}>
            <FontAwesomeIcon icon={faCode}/>
          </div>
        </li>
        <li>
          <div className="nav-container" onClick={() => scrollToRef(props.refList[2])}>
            <FontAwesomeIcon icon={faMobile}/>
          </div>
        </li>
        <li>
          <div className="nav-container" onClick={() => scrollToRef(props.refList[3])}>
            <FontAwesomeIcon icon={faGamepad}/>
          </div>
        </li>
        <li>
          <div className="nav-container" onClick={() => scrollToRef(props.refList[4])}>
            <FontAwesomeIcon icon={faIdCard}/>
          </div>
        </li>
        <li>
          <div className="nav-container" onClick={() => scrollToRef(props.refList[5])}>
            <FontAwesomeIcon icon={faEnvelope}/>
          </div>
        </li>
      </ul>
    </div>
  )
}