import Typewriter from "typewriter-effect";
import "./Home.css";

const Home = () => {
  const history = process.env.REACT_APP_HIST!;
  const excellence = process.env.REACT_APP_25_YEAR!;
  const summary = process.env.REACT_APP_SUMMARY!;
  const functions = process.env.REACT_APP_FUNCTION!;

  
  return (
    <div id="homeContainer">
      <div>
        <div className="content">
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
    </div>
  );
};
export default Home;
