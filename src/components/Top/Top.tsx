import "./Top.css";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import logo from "../../assets/img/logo/logo.png";

const Top = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const switchToLightMode = () => {
    setTheme("light");
  };
  const switchToDarkMode = () => {
    setTheme("dark");
  };
  return (
    <div className="top">
      <div></div>
      <div className="top_logo">
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
