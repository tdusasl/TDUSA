/* eslint-disable jsx-a11y/alt-text */
import Papa from "papaparse";
import { useState, useEffect } from "react";



const Structure = () => {
  const [committee, setExecutiveCommittee] = useState<any>([]);
  const eventsUri = process.env.REACT_APP_COMITTEE_MEMBERS!;
  var data = [];
  const fetchCommittee = () => {
    Papa.parse(eventsUri, {
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
    (committee) &&
    <div>
      Structure
      <div>
        {committee.map((item: any) => (
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
    </div>
  );
};
export default Structure;
