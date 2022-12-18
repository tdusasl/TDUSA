import Papa from "papaparse";
import { useEffect, useState } from "react";
import event from "../../assets/img/event.png";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useNav } from "../../hooks/useNav";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import "./Events.css";
import { Button } from "@mui/material";

const Events = () => {
  const [events, setEvents] = useState<any>([]);
  const eventsUri = process.env.REACT_APP_EVENTS!;
  const [numberOfEventsToDisplay, setNumberOfEventsToDisplay] =
    useState<number>(3);
  const [open, setOpen] = useState<boolean>(false);
  const [activeId, setActiveId] = useState(null);
  events.slice(0, 10);
  const eventsRef = useNav("Events");

  const expand = {
    content: "hello",
    height: "400px",
  };
  const expandButton = {
    visibility: "hidden",
  };

  const handleSetOpen = (key: any) => {
    setOpen(!open);
    setActiveId(key);
    console.log(key);
  };

  const fetchEvents = () => {
    Papa.parse(eventsUri, {
      download: true,
      header: true,
      complete: function (results) {
        setEvents(results.data);
      },
    });
  };
  const showAllEvents = () => {
    if (numberOfEventsToDisplay + 3 < events.length) {
      setNumberOfEventsToDisplay(numberOfEventsToDisplay + 3);
    }
  };

  useEffect(() => {
    fetchEvents();
    // eslint-disable-next-line
  }, []);

  return (
    <div ref={eventsRef} id="eventsContainer">
      <h1>Events</h1>
      <div></div>
      <div className="timeline">
        <VerticalTimeline lineColor="var(--color-secondary)">
          {events
            .slice(0, numberOfEventsToDisplay)
            .map((item: any, key: any) => (
              <VerticalTimelineElement
                key={key}
                className="vertical-timeline-element--work"
                contentStyle={{ background: "white", color: "#000" }}
                contentArrowStyle={{
                  border: "none",
                  borderRight: "none",
                  height: "2px",
                  position: "absolute",
                  width: "6%",
                  backgroundColor: "var(--color-secondary)",
                }}
                // date="2011 - present"
                iconStyle={{
                  background: "var(--color-primary)",
                  backgroundColor: "var(--color-primary)",
                  zIndex: "1",
                }}
              >
                <div
                  onClick={() => handleSetOpen(key)}
                  className={"container expand"}
                  style={open && activeId === key ? expand : {}}
                >
                  <div className="upper">
                    <img src={event} alt="" />
                    <h3 className="vertical-timeline-element-title">
                      {item.name}
                    </h3>
                    {(
                      <div>
                        <Button style={activeId === key && open ? {display:"none"} : {}}>
                          Show more
                          <BsArrowDown />
                        </Button>
                      </div>
                    )}
                   
                  </div>
                  {open && (
                    <div className="lower">
                    
                      {(
                      <div>
                        <Button style={activeId !== key ? {display:"none"} : {}}>
                          Show few
                          <BsArrowUp />
                        </Button>
                      </div>
                    )}
                      <img
                  width="300px"
                  src={"//drive.google.com/uc" + item.photo.substring(29)}
                  alt=""
                />
                    </div>
                  )}
                </div>
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
      </div>
      <button className="button" onClick={showAllEvents}>
        Show more
      </button>
    </div>
  );
};
export default Events;
