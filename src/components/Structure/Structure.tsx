import "./Structure.css";
import Papa from "papaparse";
import { useState, useEffect } from "react";
import profile from "../../assets/img/profile/profile.png";
import { useNav } from "../../hooks/useNav";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { RiCalendarEventFill } from "react-icons/ri";
import { TbHeartHandshake } from "react-icons/tb";
import CountUp from "react-countup";
import Testimonials from "../Testimonials/Testimonials";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
const Structure = () => {
  const { theme } = useContext(ThemeContext);
  const [executiveCommittee, setExecutiveCommittee] = useState<any>([]);
  const committeeUri = process.env.REACT_APP_COMITTEE_MEMBERS!;
  const auditor = process.env.REACT_APP_AUDITOR?.split(",")!;
  const patrons = process.env.REACT_APP_PATRONS?.split(",")!;
  const patronsImg = process.env.REACT_APP_PATRONSIMG?.split(",")!;
  const monitoringCommittee1 =
    process.env.REACT_APP_MONITORING_COMMITEE_1?.split(",")!;
  const monitoringCommittee1Img =
    process.env.REACT_APP_MONITORING_COMMITEE_1IMG?.split(",")!;
  const monitoringCommittee2 =
    process.env.REACT_APP_MONITORING_COMMITEE_2?.split(",")!;
  const monitoringCommittee2Img =
    process.env.REACT_APP_MONITORING_COMMITEE_2IMG?.split(",")!;
  const structureRef = useNav("Structure");
  const fetchCommittee = () => {
    Papa.parse(committeeUri, {
      download: true,
      header: true,
      complete: function (results) {
        setExecutiveCommittee(results.data);
      },
    });
  };

  useEffect(() => {
    fetchCommittee();
    // eslint-disable-next-line
  }, []);

  return (
    executiveCommittee && (
      <div ref={structureRef} id="structureContainer">
        <div className="content-title">
          <p>STRUCTURE</p>
          <div></div>
        </div>

        <div className="structure-card">
          <div>
            <div
              className={
                theme === "dark"
                  ? "structure-child"
                  : theme === "light"
                  ? "structure-child-light"
                  : ""
              }
            >
              <div>
                <MdOutlinePeopleAlt style={{ marginTop: "17%" }} />
              </div>
              <div>
                <div>
                  <CountUp
                    scrollSpyOnce={true}
                    enableScrollSpy={true}
                    scrollSpyDelay={1000}
                    end={800}
                  />
                  +
                </div>
              </div>
              <div>MEMBERS</div>
            </div>
            <div className="back-card"></div>
          </div>

          <div>
            <div
              className={
                theme === "dark"
                  ? "structure-child"
                  : theme === "light"
                  ? "structure-child-light"
                  : ""
              }
            >
              <div>
                <RiCalendarEventFill style={{ marginTop: "17%" }} />
              </div>
              <div>
                <div>
                  <CountUp
                    scrollSpyOnce={true}
                    enableScrollSpy={true}
                    scrollSpyDelay={1000}
                    end={25}
                  />
                  +
                </div>
              </div>
              <div>
                ANNUAL <br /> EVENTS
              </div>
            </div>
            <div className="back-card"></div>
          </div>
          <div>
            <div
              className={
                theme === "dark"
                  ? "structure-child"
                  : theme === "light"
                  ? "structure-child-light"
                  : ""
              }
            >
              <div>
                <TbHeartHandshake style={{ marginTop: "17%" }} />
              </div>
              <div>
                <div>
                  <CountUp
                    // scrollSpyOnce={true}
                    // enableScrollSpy={true}
                    scrollSpyDelay={1000}
                    start={2022}
                    end={1995}
                  />
                </div>
              </div>
              <div>SINCE</div>
            </div>
            <div className="back-card"></div>
          </div>
        </div>
        <div className="testimonial-container">
          <Testimonials />
        </div>

        <div className="structureContainer">
          <div className="header">
            {" "}
            Patrons
            <div className="committee">
              {patrons.map((item: any, key: any) => (
                <div key={key}>
                  <img
                    width="80px"
                    height="80px"
                    src={patronsImg[key]}
                    alt=""
                  />
                  <div>{item}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="header"> Executive Committee </div>
            <div className="committee">
              {" "}
              {executiveCommittee.map((item: any, key: any) => (
                <div key={key}>
                  <img width="80px" height="80px" src={item.photo} alt="" style={{ marginLeft: "5px", marginRight: "5px" }} />
                  <div>{item.name}</div>
                  <h4>{item.designation}</h4>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="header"> Monitoring Committee </div>
            <div className="monitorCommittee1">
              {monitoringCommittee1.map((item: any, key: any) => (
                <div key={key}>
                  <img width="80px" height="80px" src={monitoringCommittee1Img[key]?monitoringCommittee1Img[key]:profile} alt="" />
                  <div>{item}</div>
                </div>
              ))}
            </div>

            <div className="monitorCommittee2">
              {monitoringCommittee2.map((item: any, key: any) => (
                <div key={key}>
                  <img width="80px" height="80px" src={monitoringCommittee2Img[key]?monitoringCommittee2Img[key]:profile} alt="" />
                  <div>{item}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="header"> Auditor </div>
            <div className="committee">
              <div>
                <img width="80px" height="80px" src={auditor[1]} alt="" />

                <div>{auditor[0]}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};
export default Structure;
