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
  const [numberOfEventsToDisplay, setNumberOfEventsToDisplay] = useState<number>(5);
  events.slice(0, 10);

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
  const showAllEvents = () => {
    if(numberOfEventsToDisplay+5<events.length){
    setNumberOfEventsToDisplay(numberOfEventsToDisplay + 5);
  }
  }

  useEffect(() => {
    fetchEvents();
    console.log(events);
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1>Events</h1>
      <div></div>
      <VerticalTimeline 
      lineColor="rgb(0, 255,0 )"
      >
        {events.slice(0,numberOfEventsToDisplay).map((item: any) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "#000" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            // date="2011 - present"
            iconStyle={{
              background: "rgb(33, 150, 243)",
              color: "#fff",
              fontFamily: "Roboto",
              // width: "20px",
              // height: "20px",
              // marginTop: "20px",
              // marginLeft: "-10px",
            }}
          >
            <h3 className="vertical-timeline-element-title">{item.name}</h3>
            {/* <img
                  width="300px"
                  src={"//drive.google.com/uc" + item.photo.substring(29)}
                  alt=""
                /> */}
          </VerticalTimelineElement>
        ))}

        {/* <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
        /> */}
      </VerticalTimeline>
      <button onClick={showAllEvents}>Show more</button>

    </div>
  );
};
export default Events;
