import React, { useContext } from "react";
import "./App.css";
import Events from "./components/Events/Events";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";
import { Container } from "tsparticles-engine/types/Core/Container";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import PastPapers from "./components/PastPapers/PastPapers";
import Stats from "./components/Stats/Stats";
import Structure from "./components/Structure/Structure";
import { useState, CSSProperties } from "react";
import DotLoader from "react-spinners/DotLoader";
import Testimonial from "./components/Testimonial/Testimonial";
import NavProvider from "./context/NavContext";
import Results from "./components/Results/Results";
import { ThemeContext } from "./context/ThemeContext";
import { MdDarkMode, MdLightMode } from "react-icons/md";
const override: CSSProperties = {
  margin: "0 auto",
  borderColor: "red",
  position: "absolute",
  top: "50%",
  left: "50%",
  zIndex: "999",
};

function App() {
  let [loading, setLoading] = useState(true);
  const color = "#000000";
  const { theme,setTheme } = useContext(ThemeContext);

  const particlesInit = async (main: Engine) => {
    await loadFull(main);
  };

  const particlesLoaded = (container?: Container): Promise<void> => {
    return Promise.resolve();
  };

  const switchToLightMode = () => {
    setTheme("light");
  };
  const switchToDarkMode = () => {
    setTheme("dark");
  };


  return (
    <div
      className={
        theme === "dark" ? "App" : theme === "light" ? "App-light" : ""
      }
    >
      <NavProvider>
        <div className="themeIconContainer">
         {theme==="light"&& <div onClick={switchToDarkMode}>
            <MdDarkMode />
          </div>}
          {theme==="dark"&& <div onClick={switchToLightMode}>
            <MdLightMode />
          </div>}
        </div>

        <Particles
          className="particles"
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fullScreen: false,
            background: {
              color: {
                value: "#b111e",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: false,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 50,
                  duration: 1,
                },
              },
            },
            particles: {
              color: {
                value: "#95c3e9",
              },
              links: {
                color: "#95c3e9",
                distance: 120,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: false,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 1.5,
                straight: true,
              },
              number: {
                density: {
                  enable: true,
                  area: 1000,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
        {/* <div className="loader">
        <DotLoader
          color={color}
          loading={loading}
          cssOverride={override}
          size={150}
        />
      </div> */}
        <Header />
        <Results />
        <Home />
        <Events />
        <Stats />
        <Testimonial />
        <Structure />
        <PastPapers />
        <Footer />
      </NavProvider>
    </div>
  );
}

export default App;
