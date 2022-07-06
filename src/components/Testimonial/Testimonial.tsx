/* eslint-disable jsx-a11y/alt-text */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Testimonial.css";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";

export default function Testimonial() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide-container">
            <div className="flex-cont">
              <div>MOMENTS OF US</div>
              <div className="slide">
                <div>
                  <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </div>
                <div>
                  <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </div>
                <div>
                  <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </div>
              </div>
            </div>
            <div>PONGAL VIZHA 2022</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-container">
            <div className="flex-cont">
              <div>MOMENTS OF US</div>
              <div className="slide">
                <div>
                  <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </div>
                <div>
                  <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </div>
                <div>
                  <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </div>
              </div>
            </div>
            <div>PONGAL VIZHA 2022</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-container">
            <div className="flex-cont">
              <div>MOMENTS OF US</div>
              <div className="slide">
                <div>
                  <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </div>
                <div>
                  <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </div>
                <div>
                  <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </div>
              </div>
            </div>
            <div>PONGAL VIZHA 2022</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-container">
            <div className="flex-cont">
              <div>MOMENTS OF US</div>
              <div className="slide">
                <div>
                  <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </div>
                <div>
                  <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </div>
                <div>
                  <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </div>
              </div>
            </div>
            <div>PONGAL VIZHA 2022</div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
