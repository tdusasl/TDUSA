import styles from "./Header.module.css";
import { BiHome, BiCalendarCheck } from "react-icons/bi";
import { IoIosPeople } from "react-icons/io";
import { BsBook } from "react-icons/bs";
import { useContext, useState } from "react";
import { NavContext } from "../../context/NavContext";
const Header = () => {
  const {activeNavLinkId, setActiveNavLinkId} = useContext(NavContext);
  const [navLinkId, setNavLinkId] = useState('Home');
  const [scrollToId, setScrollToId] = useState('homeContainer');
  const handleClick = (navLinkId:string,scrollToId:string) => {
    setNavLinkId(navLinkId);
    setScrollToId(scrollToId);
    setActiveNavLinkId(navLinkId);
    document.getElementById(scrollToId)?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
      <header className={styles.header} id="header">
        <nav>
          <div className={styles.navContainer}>
            <div className={styles.navElements}>
              <div 
              className={activeNavLinkId === "Home" ? styles.activeClass : ''}
              onClick={()=>handleClick('Home','homeContainer')} >
                <BiHome />
              </div>
              <div 
              className={activeNavLinkId === 'Events' ? styles.activeClass : ''}
              onClick={()=>handleClick('Events','eventsContainer')}>
                <BiCalendarCheck />
              </div>
              <div
              className={activeNavLinkId === 'Structure' ? styles.activeClass : ''}
              onClick={()=>handleClick('Structure','structureContainer')}>
                <IoIosPeople />
              </div>
              <div 
              className={activeNavLinkId === 'Paper' ? styles.activeClass : ''}
              onClick={()=>handleClick('Paper','paperContainer')}>
                <BsBook />
              </div>
              <div 
              className={activeNavLinkId === 'Paper' ? styles.activeClass : ''}
              onClick={()=>handleClick('Paper','paperContainer')}>
                <BsBook />
              </div>
            </div>
          </div>
        </nav>
      </header>
  );
};

export default Header;
