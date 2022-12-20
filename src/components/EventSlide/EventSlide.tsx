/* eslint-disable jsx-a11y/alt-text */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import event from "../../assets//img/event1.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./EventSlide.css";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";

export default function EventSlide() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        navigation={true}
        pagination={{
          clickable: true
          // ,
          // el: ".swiper-pagination",
        }}
        effect={"fade"}
        loop={true}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide-container">
            <div className="flex-cont">
              <div>MOMENTS OF US</div>
              <div className="slide">
                <div>
                  <img src={event} />
                </div>
                <div>
                  <img src={event} />
                </div>
                <div>
                  <img src={event} />
                </div>
              </div>
            </div>
            <div>PONGAL VIZHA</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-container">
            <div className="flex-cont">
              <div>MOMENTS OF US</div>
              <div className="slide">
                <div>
                  <img src={event} />
                </div>
                <div>
                  <img src={event} />
                </div>
                <div>
                  <img src={event} />
                </div>
              </div>
            </div>
            <div>Do you know Quiz</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-container">
            <div className="flex-cont">
              <div>MOMENTS OF US</div>
              <div className="slide">
                <div>
                  <img src={event} />
                </div>
                <div>
                  <img src={event} />
                </div>
                <div>
                  <img src={event} />
                </div>
              </div>
            </div>
            <div>A/L pilot exam</div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
