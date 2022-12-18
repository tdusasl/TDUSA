import "./Vizhuthuhal.css";
import CountUp from "react-countup";
import hands from "../../assets/img/hands/hands.png";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
const Vizhuthuhal = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      <div className="content-title">
        <p>VIZHUTHUHAL</p>
        <div></div>
      </div>
      <div className="vizhuthugal-intro">
        <p>
          Vizhuthugal project is implemented to support students with financial
          struggles. From primary to university graduates all are able to get
          benefit from this project. A prolonged secure procedure will be held
          to select the rightful students. This project is organised in a well
          branched structure and abided with laws to make the whole process
          solid and secure.
        </p>
      </div>
      <div
        className={
          theme === "dark" ? "stats" : theme === "light" ? "stats-light" : ""
        }
      >
        <div className="stats-content">
          <div>
            <div>
              <CountUp
                enableScrollSpy={true}
                scrollSpyOnce={false}
                scrollSpyDelay={1000}
                end={14}
              />
              +
            </div>
            <div>STUDENTS</div>
          </div>
          <div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className="rupees">RS </div>
              <div>
                <CountUp
                  enableScrollSpy={true}
                  scrollSpyOnce={false}
                  scrollSpyDelay={1000}
                  end={30000}
                />
                +
              </div>
            </div>
            <div>MONTHLY DONATIONS</div>
          </div>
          <div>
            <div>
              <CountUp
                enableScrollSpy={true}
                scrollSpyOnce={false}
                scrollSpyDelay={1000}
                start={0}
                end={10}
              />
              +
            </div>
            <div>DONORS</div>
          </div>
        </div>
        <div className="stat-img">
          <img src={hands} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Vizhuthuhal;
