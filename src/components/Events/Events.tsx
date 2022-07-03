import Papa from "papaparse";
import { useEffect, useState } from "react";
import {VerticalTimeline,VerticalTimelineElement,} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import './Events.css'

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
      lineColor="var(--color-secondary)"
      >
        {events.slice(0,numberOfEventsToDisplay).map((item: any) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "#000" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            // date="2011 - present"
            iconStyle={{
              background: "var(--color-primary)",
              color: "var(--color-secondary)",
              fontFamily: "Roboto",
              backgroundColor: "var(--color-primary)",
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
         iconStyle={{
          background: "var(--color-primary)",
          color: "var(--color-secondary)",
          fontFamily: "Roboto",
          backgroundColor: "var(--color-primary)",
        }}
        /> */}
      </VerticalTimeline>
      <button className="button" onClick={showAllEvents}>Show more</button>

    </div>
  );
};
export default Events;
