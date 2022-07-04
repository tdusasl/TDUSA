import Papa from "papaparse";
import { useState, useEffect, useRef } from "react";
import { useNav } from "../../hooks/useNav";

const PastPapers = () => {
    const [pastPapers, setPastPapers] = useState<any>([]);
    const pastPapersUri = process.env.REACT_APP_PAST_PAPERS!;
    const paperRef = useNav("Paper")

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
        <div ref={paperRef} id='paperContainer'>
        <h1>Past Papers</h1>
        {pastPapers.map((item: any,key:any) => (
            <div key={key}>{item.stream}</div>
        ))}
        </div>
    );
}
export default PastPapers;