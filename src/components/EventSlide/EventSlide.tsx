/* eslint-disable jsx-a11y/alt-text */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import event from "../../assets//img/event1.jpg";
import { useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./EventSlide.css";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";

export default function EventSlide() {
  const myStyle = {
    backgroundColor: "white",
  }
  const [showMore, setShowMore] = useState(false);
  const { theme } = useContext(ThemeContext);
  const handleShowMore = () => {
    setShowMore(!showMore);
  }
  return (
    <>
      <div>
        <div className="content-title">
          <p>MOMENTS OF US</p>
          <div></div>
        </div>
        <div className={
          theme === "light" ? "event-cont-light" : "event-cont"
        }>
          <div className="event">
            <Swiper
              spaceBetween={30}
              navigation={true}
              pagination={{
                clickable: true,
                // ,
                // el: ".swiper-pagination",
              }}
              effect={"fade"}
              loop={true}
              modules={[EffectFade, Navigation, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div style={theme==='light' ? myStyle:{}} className="slide-container">
                  <div className="event-title">
                    <p>PONGAL VIZHA</p>
                    <div></div>
                  </div>
                  <div>
                    <img src={event} />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div style={theme==='light' ? myStyle:{}} className="slide-container">
                  <div className="event-title">
                    <p>PONGAL VIZHA</p>
                    <div></div>
                  </div>
                  <div>
                    <img src={event} />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div style={theme==='light' ? myStyle:{}} className="slide-container">
                  <div className="event-title">
                    <p>PONGAL VIZHA</p>
                    <div></div>
                  </div>
                  <div>
                    <img src={event} />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <Swiper
              spaceBetween={30}
              navigation={true}
              pagination={{
                clickable: true,
                // ,
                // el: ".swiper-pagination",
              }}
              effect={"fade"}
              loop={true}
              modules={[EffectFade, Navigation, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div style={theme==='light' ? myStyle:{}} className="slide-container">
                  <div className="event-title">
                    <p>CRICKET FIESTA</p>
                    <div></div>
                  </div>

                  <div>
                    <img src={event} />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div style={theme==='light' ? myStyle:{}} className="slide-container">
                  <div className="event-title">
                    <p>CRICKET FIESTA</p>
                    <div></div>
                  </div>
                  <div>
                    <img src={event} />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div style={theme==='light' ? myStyle:{}} className="slide-container">
                  <div className="event-title">
                    <p>CRICKET FIESTA</p>
                    <div></div>
                  </div>
                  <div>
                    <img src={event} />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className={!showMore?"view-more":"hide"} onClick={handleShowMore} >VIEW MORE EVENTS</div>
            <div className={showMore ? "event-more" : "event-more hide"}>
              <Swiper
                spaceBetween={30}
                navigation={true}
                pagination={{
                  clickable: true,
                  // ,
                  // el: ".swiper-pagination",
                }}
                effect={"fade"}
                loop={true}
                modules={[EffectFade, Navigation, Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div style={theme==='light' ? myStyle:{}} className="slide-container">
                    <div className="event-title">
                      <p>ANNUAL EXAM</p>
                      <div></div>
                    </div>

                    <div>
                      <img src={event} />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div style={theme==='light' ? myStyle:{}} className="slide-container">
                    <div className="event-title">
                      <p>ANNUAL EXAM</p>
                      <div></div>
                    </div>
                    <div>
                      <img src={event} />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div style={theme==='light' ? myStyle:{}} className="slide-container">
                    <div className="event-title">
                      <p>ANNUAL EXAM</p>
                      <div></div>
                    </div>

                    <div>
                      <img src={event} />
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
