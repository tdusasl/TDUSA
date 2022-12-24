/* eslint-disable jsx-a11y/alt-text */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useContext, useEffect } from "react";

import Papa from "papaparse";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./EventSlide.css";
import { ThemeContext } from "../../context/ThemeContext";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";

const EventSlide = () => {
  const [moments, setMoments] = useState<any>([]);
  const momentsUri = process.env.REACT_APP_MOMENTS!;
  const [numberOfMomentsToDisplay, setNumberOfMomentsToDisplay] =
    useState<number>(2);
  const myStyle = {
    backgroundColor: "white",
  };

  const fetchMoments = () => {
    Papa.parse(momentsUri, {
      download: true,
      header: true,
      complete: function (results) {
        setMoments(results.data);
      },
    });
  };
  useEffect(() => {
    fetchMoments();
    console.log(moments);
    // eslint-disable-next-line
  }, []);

  const [showMore, setShowMore] = useState(false);
  const { theme } = useContext(ThemeContext);
  const handleShowMore = () => {
    setShowMore(!showMore);
  };
  const showMoreMoments = () => {
    if (numberOfMomentsToDisplay + 2 <= moments.length) {
      setNumberOfMomentsToDisplay(numberOfMomentsToDisplay + 2);
    }
    else if(numberOfMomentsToDisplay +1 === moments.length){
      setNumberOfMomentsToDisplay(numberOfMomentsToDisplay+1)
    } 
  };
  return (
    <>
      <div>
        <div className="content-title">
          <p>MOMENTS OF US</p>
          <div></div>
        </div>
        <div className={theme === "light" ? "event-cont-light" : "event-cont"}>
          {moments
            .slice(0, numberOfMomentsToDisplay)
            .map((moment: any, index: number) => {
              return (
                <div className="event-more">
                  <Swiper
                    key={index}
                    spaceBetween={30}
                    navigation={true}
                    pagination={{
                      clickable: true,
                    }}
                    autoplay={true}
                    effect={"fade"}
                    loop={true}
                    modules={[EffectFade, Navigation, Pagination]}
                    className="mySwiper"
                  >
                    {moment.images.split(',').map((image: any, index: number) => {
                      return (
                        <SwiperSlide>
                          <div
                            style={theme === "light" ? myStyle : {}}
                            className="slide-container"
                          >
                            <div className="event-title">
                              <p>{moment.eventName}</p>
                              <div></div>
                            </div>
                            <div className="moment-img">
                              <img src={image} />
                            </div>
                          </div>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </div>
              );
            })}
          {numberOfMomentsToDisplay < moments.length && (
            <div className="view-more" onClick={showMoreMoments}>
              VIEW MORE EVENTS
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default EventSlide;
