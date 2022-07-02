import Papa from "papaparse";
import { useEffect, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Events = () => {
  const [events, setEvents] = useState<any>([]);
  const eventsUri = process.env.REACT_APP_EVENTS!;

  const fetchEvents = () => {
    Papa.parse(eventsUri, {
      download: true,
      header: true,
      complete: function (results) {
        console.log(results.data);
        setEvents(results.data);
      },
    });
  };

  useEffect(() => {
    fetchEvents();
    console.log(events);
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1>Events</h1>
      <div></div>
      <VerticalTimeline>
        {events.map((item: any) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "#000" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2011 - present"
            iconStyle={{
              background: "rgb(33, 150, 243)",
              color: "#fff",
              fontFamily: "Roboto",
            }}
          >
            <h3 className="vertical-timeline-element-title">{item.name}</h3>
            {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
            {/* <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, 
            Team Leading
          </p> */}
            {/* <img
                  width="300px"
                  src={"//drive.google.com/uc" + item.photo.substring(29)}
                  alt=""
                /> */}
          </VerticalTimelineElement>
        ))}

        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
        />
      </VerticalTimeline>
    </div>
  );
};
export default Events;
