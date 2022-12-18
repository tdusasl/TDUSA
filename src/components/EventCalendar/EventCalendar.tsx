import "./EventCalendar.css";
import eventCalendar from '../../assets/img/eventCalendar/eventCalendar.png'
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
const EventCalendar = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="event-calendar-container">
      <div className="content-title">
        <p>EVENT CALENDAR</p>
        <div></div>
      </div>
      {
        theme === "dark" ? 
          <div className="event-calendar">
          <img src={eventCalendar} alt="dark" />
        </div>
        :
         
            <div className="event-calendar">
            <img src={eventCalendar} alt="light" />
          </div>
          
        
      }
      


      <div className="upcoming-events-container">
        <div className="heading">UPCOMING EVENTS</div>
        <div className="upcoming-events">
            <div className="">
                <div className="event-date">10</div>
                <div className="event-month">JAN</div>
                <div></div>
                <div className="event-name">A/L Pilot Exam</div>
            </div>
            <div className="">
                <div className="event-date">10</div>
                <div className="event-month">JAN</div>
                <div></div>
                <div className="event-name">A/L Pilot Exam</div>
            </div>
            <div className="">
                <div className="event-date">10</div>
                <div className="event-month">JAN</div>
                <div></div>
                <div className="event-name">A/L Pilot Exam</div>
            </div>
        </div>
      </div>

    </div>
  );
};
export default EventCalendar;
