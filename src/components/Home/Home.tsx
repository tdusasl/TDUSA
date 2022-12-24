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
                .typeString("EXCELLENCE.")
                .pauseFor(1000)
                .deleteAll()
                .typeString("ENRICHMENT.")
                .deleteAll()
                .typeString("EMPOWERING YOUTH.")
                .deleteAll()
                .start();
            }}
          />
        </div>
        <div className="home-contact">
          <div className="results">
            <Results />
          </div>
          <a target="_blank" href="https://www.facebook.com/tdusa" rel="noreferrer">
          <BsFacebook />
          </a>
          <a target="_blank" href="https://wa.me/94742821247?text=Hello!%20Welcome%20to%20TDUSA" rel="noreferrer">
          <BsWhatsapp />
          </a>
          <a href = "mailto:tdusa.sl@gmail.com">
          <MdMailOutline />
          </a>
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
                Trincomalee district University Students Association also known
                as TDUSA is a non profitable public organisation which was run
                by enthusiastic University undergraduates of Trincomalee, in
                order to uplift the educational and social standards of our
                district. Our association contains members from various streams
                including Physical science, Biological science, Commerce, Arts,
                Bio technology and Engineering technology.
              </p>
            </div>
            <div className="goal">
              <h1>WHAT DO WE DO?</h1>
              <p>
                TDUSA functions primarily focusing on improvement of the
                educational standard of Trincomalee students. 25 years of
                dedicated and sincere service, surpassing many ups and downs
                lead us now t o function in a validated way t o deliver
                invaluable education service t o our students. Along with that
                now we are providing social snd environmental improvement
                service to our district annually on a large scale. Passing over
                25 years and more than 700 mentors, our organisation has made
                sustainable development in all the activities and earned a
                prominent fame around our society.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
