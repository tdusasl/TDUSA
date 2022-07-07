import "./Stats.css";
import CountUp from "react-countup";
import hands from '../../assets/img/hands/hands.png'
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
const Stats = () => {
  const { theme} = useContext(ThemeContext);
  return (
    <div>
      <div className="content-title">
        <p>VIZHUTHUHAL</p>
        <div></div>
      </div>
      <div className={
        theme === "dark" ? "stats" : theme === "light" ? "stats-light" : ""
      }>
        <div className="stats-content">
          <div>
            <div>
              <CountUp  enableScrollSpy={true} scrollSpyOnce={false} scrollSpyDelay={1000} end={14} />+
            </div>
            <div>STUDENTS</div>
          </div>
          <div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className="rupees">RS </div>
              <div>
                <CountUp enableScrollSpy={true} scrollSpyOnce={false} scrollSpyDelay={1000} end={30000} />+
              </div>
            </div>
            <div>MONTHLY DONATIONS</div>
          </div>
          <div>
            <div>
              <CountUp enableScrollSpy={true} scrollSpyOnce={false} scrollSpyDelay={1000} start={0} end={10} />+
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
export default Stats;
