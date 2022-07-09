import Typewriter from "typewriter-effect";
import Donate from "../Donate/Donate";
import Results from "../Results/Results";
import "./Home.css";
import { BsWhatsapp, BsFacebook } from "react-icons/bs";
import { MdMailOutline } from "react-icons/md";

const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="typewriter">
          <div>27 YEARS OF</div>
          <Typewriter
            options={{
              loop: true,
              cursor: "|",
              deleteSpeed: 0.5,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("EXCELLENCE")
                .pauseFor(1000)
                .deleteAll()
                .typeString("ENRICHMENT")
                .deleteAll()
                .typeString("EMPOWERING YOUTH")
                .deleteAll()
                .start();
            }}
          />
        </div>
        <div className="home-contact">
          <div className="results">
            <Results />
          </div>
            <BsFacebook/>
            <BsWhatsapp/>
            <MdMailOutline/>
          <div className="donate">
            <Donate />
          </div>
        </div>
        <div className="content-title">
          <p>ABOUT US</p>
          <div></div>
        </div>
        <div className="content">
          <div className="text-content">
            <div className="introduction">
              <h1>WHO ARE WE?</h1>
              <p>
                Trincomalee District University Students’ Association is a
                non-profitable public organization run by the undergraduates who
                were selected to university from Trincomalee from various
                streams such as Physical science, Biological science, Commerce,
                Arts, Bio technology and Engineering technology.
              </p>
            </div>
            <div className="goal">
              <h1>WHAT DO WE DO?</h1>
              <p>
                Our main goal is to uplift the educational standards of the
                students of Trincomalee district. And along with education we
                also take care in social and environmental developing
                activities. Our union is being an enormously active as well as a
                rapidly growing socialwell-wishing association now a days. We
                are conducting about 25 projects annually. Passing 700 members
                over 25 years, our organization has made a sustainable
                development iall the activities and had earned a prominent fame
                around our society.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};
export default Home;
