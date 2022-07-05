import Typewriter from "typewriter-effect";
import { useNav } from "../../hooks/useNav";
import "./Home.css";

const Home = () => {
  const homeRef = useNav("Home");

  return (
    <div ref={homeRef} id="homeContainer">
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
        <div className="introduction">
          <p>
            Trincomalee District University Students’ Association is a
            non-profitable public organization run by the undergraduates who
            were selected to university from Trincomalee from various streams
            such as Physical science, Biological science, Commerce, Arts, Bio
            technology and Engineering technology.
          </p>
        </div>
        <div className="goal">
          <p>
            Our main goal is to uplift the educational standards of the students
            of Trincomalee district. And along with education we also take care
            in social and environmental developing activities. Our union is
            being an enormously active as well as a rapidly growing
            socialwell-wishing association now a days. We are conducting about
            25 projects annually. Passing 700 members over 25 years, our
            organization has made a sustainable development iall the activities
            and had earned a prominent fame around our society.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Home;
