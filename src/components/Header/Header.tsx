import styles from "./Header.module.css";
import { BiHome, BiCalendarCheck } from "react-icons/bi";
import { IoIosPeople } from "react-icons/io";
import { BsBook } from "react-icons/bs";
const Header = () => {
  return (
      <header className={styles.header} id="header">
        <nav>
          <div className={styles.navContainer}>
            <div className={styles.navElements}>
              <div className={styles.activeLink}>
                <BiHome />
              </div>
              <div>
                <BiCalendarCheck />
              </div>
              <div>
                <IoIosPeople />
              </div>
              <div>
                <BsBook />
              </div>
            </div>
          </div>
        </nav>
      </header>
  );
};

export default Header;
