/* eslint-disable jsx-a11y/alt-text */
import Papa from "papaparse";
import { useState, useEffect } from "react";



const Structure = () => {
  const [executiveCommittee, setExecutiveCommittee] = useState<any>([]);
  const committeeUri = process.env.REACT_APP_COMITTEE_MEMBERS!;
  const auditor = process.env.REACT_APP_AUDITOR!;
  const legalAdvisor = process.env.REACT_APP_LEGAL_ADVISOR!;
  const patrons = process.env.REACT_APP_PATRONS?.split(',')!;
  const monitoringCommittee = process.env.REACT_APP_MONITORING_COMMITEE_1?.split(',')!;
  const fetchCommittee = () => {
    Papa.parse(committeeUri, {
      download: true,
      header: true,
      complete: function (results) {
        console.log(results.data);
        setExecutiveCommittee( results.data );      
      },
    });
  };


  useEffect(() => {
    fetchCommittee();
    // eslint-disable-next-line
  }, []);


  return (
    (executiveCommittee) &&
    <div>
      Structure
      <div>Patrons
        <div>
          {patrons.map((item: any) => (
            <div>{item}</div>
          ))}
        </div>
      </div>
      <div>
        <div>Executive Committee</div>
        {executiveCommittee.map((item: any) => (
          <div>
          <div>{item.name}</div>
          {/* <img
                width="80px"
                height="80px"
                style={{ borderRadius: "50px" }}
                src={"//drive.google.com/uc" + item.photo.substring(29)}
              ></img> */}
              <h4>{item.designation}</h4>
          </div>
        ))}
      </div>
      <div>Monitoring Committee
        <div>
          {monitoringCommittee.map((item: any) => (
            <div>{item}</div>
          ))}
        </div>
      </div>
      <div>Auditor 
        <div>{auditor}</div>
      </div> 
      <div>
        Legal Advisor
        <div>{legalAdvisor}</div>
      </div>
    </div>
  );
};
export default Structure;
