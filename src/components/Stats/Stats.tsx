import "./Stats.css";
import CountUp from "react-countup";
import hands from '../../assets/img/hands/hands.png'
const Stats = () => {
  return (
    <div>
      <div className="content-title">
        <p>ABOUT US</p>
        <div></div>
      </div>
      <div className="stats">
        <div className="stats-content">
          <div>
            <div>
              <CountUp end={14} />+
            </div>
            <div>STUDENTS</div>
          </div>
          <div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className="rupees">RS </div>
              <div>
                <CountUp start={20001} end={30000} />+
              </div>
            </div>
            <div>MONTHLY DONATIONS</div>
          </div>
          <div>
            <div>
              <CountUp start={0} end={10} />+
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
