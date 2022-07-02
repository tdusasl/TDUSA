import Typewriter from "typewriter-effect";
import "./Home.css";

const Home = () => {
  const history = process.env.REACT_APP_HIST!;
  const excellence = process.env.REACT_APP_25_YEAR!;
  return (
    <div>
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
