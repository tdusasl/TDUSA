import Typewriter from "typewriter-effect";
import "./Home.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";
import { Container } from "tsparticles-engine/types/Core/Container";

const Home = () => {
  const history = process.env.REACT_APP_HIST!;
  const excellence = process.env.REACT_APP_25_YEAR!;

  const particlesInit = async (main: Engine) => {
    console.log(main);

    await loadFull(main);
  };

  const particlesLoaded = (container?: Container): Promise<void> => {
    console.log(container);
    return Promise.resolve();
  };
  return (
    <div id='homeContainer'>
      <div >
        <Particles className="particles"
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fullScreen:false,
            background: {
              color: {
                value: "#b111e",
              },
              
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
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

        <h1>Home</h1>


        <Typewriter
          options={{
            loop: true,
            cursor: "|",
            deleteSpeed: 0.5,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString("Welcome to the website of")
              .pauseFor(1000)
              .deleteAll()
              .typeString("TDUSA")
              .deleteAll()
              .start();
          }}
        />
      </div>
      <div className="history">
        <p>{history}</p>
      </div>
      <div className="excellence">
        <p>{excellence}</p>
      </div>
    </div>
  );
};
export default Home;
