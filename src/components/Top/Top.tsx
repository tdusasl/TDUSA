import "./Top.css";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import logo from "../../assets/img/logo/logo.png";
import { useNav } from "../../hooks/useNav";

const Top = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const switchToLightMode = () => {
    setTheme("light");
  };
  const switchToDarkMode = () => {
    setTheme("dark");
  };
  const topRef = useNav("Top");
  return (
    <div ref={topRef} id="topContainer" className="top">
      <div></div>
      <div className="top_logo">
        <div className="top-title">TDUSA</div>
        <img src={logo} alt="" />
      </div>
      <div className="themeIconContainer">
        {theme === "light" && (
          <div onClick={switchToDarkMode}>
            <MdDarkMode />
          </div>
        )}
        {theme === "dark" && (
          <div onClick={switchToLightMode}>
            <MdLightMode />
          </div>
        )}
      </div>
    </div>
  );
};
export default Top;
