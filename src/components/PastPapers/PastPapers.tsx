import Papa from "papaparse";
import { useState, useEffect } from "react";

const PastPapers = () => {
    const [pastPapers, setPastPapers] = useState<any>([]);
    const pastPapersUri = process.env.REACT_APP_PAST_PAPERS!;

    const fetchPastPapers = () => {
        Papa.parse(pastPapersUri, {
            download: true,
            header: true,
            complete: function (results) {
                setPastPapers(results.data);
            }
        });
    }

    useEffect(() => {
        fetchPastPapers();
        // eslint-disable-next-line
    },[]);

    return (
        <div id='paperContainer'>
        <h1>Past Papers</h1>
        {pastPapers.map((item: any,key:any) => (
            <div key={key}>{item.stream}</div>
        ))}
        </div>
    );
}
export default PastPapers;