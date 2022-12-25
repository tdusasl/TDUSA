import Papa from "papaparse";
import { useState, useEffect } from "react";
import { useNav } from "../../hooks/useNav";
import "./PastPapers.css";

const PastPapers = () => {
  const [pastPapers, setPastPapers] = useState<any>([]);
  const pastPapersUri = process.env.REACT_APP_PAST_PAPERS!;
  const paperRef = useNav("Paper");

  const fetchPastPapers = () => {
    Papa.parse(pastPapersUri, {
      download: true,
      header: true,
      complete: function (results) {
        setPastPapers(results.data);
      },
    });
  };

  useEffect(() => {
    fetchPastPapers();
    // eslint-disable-next-line
  }, []);

  return (
    <div ref={paperRef} className="paper-container" id="paperContainer">
      <h1>Past Papers</h1>
      <div className="card-container">
        {pastPapers.map((item: any, key: any) => (
          <div key={key} className="card">
            <a href={item.paperLink} target="_blank" rel="noreferrer">
            <h3 className="title">{item.stream}</h3>
            <div className="bar">
              <div className="emptybar"></div>
              <div className="filledbar"></div>
            </div>
            <div className="circle">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                <circle className="stroke" cx="60" cy="60" r="50" />
              </svg>
            </div>
            </a>
          </div>
        ))}
      </div>
      <div className="card-container">
          <div  className="card">
            <h3 className="title">O/L Past Papers</h3>
            <div className="bar">
              <div className="emptybar"></div>
              <div className="filledbar"></div>
            </div>
            <div className="circle">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                <circle className="stroke" cx="60" cy="60" r="50" />
              </svg>
            </div>
          </div>

      </div>
    </div>
  );
};
export default PastPapers;
