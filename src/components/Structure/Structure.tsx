import "./Structure.css";
import Papa from "papaparse";
import { useState, useEffect } from "react";
import profile from "../../assets/img/profile/profile.png";
import { useNav } from "../../hooks/useNav";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { RiCalendarEventFill } from "react-icons/ri";
import { TbHeartHandshake } from "react-icons/tb";
import CountUp from "react-countup";

const Structure = () => {
  const [executiveCommittee, setExecutiveCommittee] = useState<any>([]);
  const committeeUri = process.env.REACT_APP_COMITTEE_MEMBERS!;
  const auditor = process.env.REACT_APP_AUDITOR!;
  const legalAdvisor = process.env.REACT_APP_LEGAL_ADVISOR!;
  const patrons = process.env.REACT_APP_PATRONS?.split(",")!;
  const monitoringCommittee1 =
    process.env.REACT_APP_MONITORING_COMMITEE_1?.split(",")!;
  const monitoringCommittee2 =
    process.env.REACT_APP_MONITORING_COMMITEE_2?.split(",")!;
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
      <div>
        <div className="content-title">
          <p>STRUCTURE</p>
          <div></div>
        </div>

        <div className="structure-card">
          <div>
            <div>
              <div>
                <MdOutlinePeopleAlt style={{ marginTop: "17%" }} />
              </div>
              <div>
                <div>
                  <CountUp enableScrollSpy={true} scrollSpyDelay={1000} start={700} end={800} />+
                </div>
              </div>
              <div >MEMBERS</div>
            </div>
          </div>
          <div>
            <div>
              <div>
                <RiCalendarEventFill style={{ marginTop: "17%" }} />
              </div>
              <div>
                <div>
                  <CountUp enableScrollSpy={true} scrollSpyDelay={1000} start={0} end={25} />+
                </div>
              </div>
              <div >ANNUAL <br/> EVENTS</div>
            </div>
          </div>
          <div>
            <div>
              <div>
                <TbHeartHandshake style={{ marginTop: "17%" }} />
              </div>
              <div>
                <div>
                  <CountUp enableScrollSpy={true}  scrollSpyDelay={1000} start={2022} end={1995} />
                </div>
              </div>
              <div >SINCE</div>
            </div>
          </div>
        </div>

        <div
          ref={structureRef}
          id="structureContainer"
          className="structureContainer"
        >
          <div className="header">
            {" "}
            Patrons
            <div className="committee">
              {patrons.map((item: any, key: any) => (
                <div key={key}>
                  <img width="80px" height="80px" src={profile} alt="" />
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
                  {/* { <img
                width="80px"
                height="80px"
                style={{ borderRadius: "100px" }}
                src={"//drive.google.com/uc" + item.photo.substring(29) }
              ></img> } */}

                  <img width="80px" height="80px" src={profile} alt="" />

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
                  <img width="80px" height="80px" src={profile} alt="" />
                  <div>{item}</div>
                </div>
              ))}
            </div>

            <div className="monitorCommittee2">
              {monitoringCommittee2.map((item: any, key: any) => (
                <div key={key}>
                  <img width="80px" height="80px" src={profile} alt="" />
                  <div>{item}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="header"> Auditor </div>
            <div className="committee">
              <div>
                <img width="80px" height="80px" src={profile} alt="" />

                <div>{auditor}</div>
              </div>
            </div>
          </div>

          <div>
            <div className="header"> Legal Advisor </div>
            <div className="committee">
              <div>
                <img width="80px" height="80px" src={profile} alt="" />
                <div>{legalAdvisor}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};
export default Structure;
