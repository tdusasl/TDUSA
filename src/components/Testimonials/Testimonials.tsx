import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Testimonials = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slideActiveClass="swiper-slide-active"
        centeredSlides={true}
        autoHeight={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        navigation={false}
        breakpoints={{
            376: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <div className="swiper-wrapper">
          <SwiperSlide>
            <div className="content-wrapper">
              <div className="content">
                <div className="swiper-avatar">
                  <img src="https://bikes-n-stuff.com/wp-content/uploads/sb-instagram-feed-images/julietelliott.jpg" />
                </div>
                <p>
                  "Duis mollis, est non commodo luctus, nisi erat porttitor
                  ligula, eget lacinia odio sem nec elit. Donec id elit non mi
                  porta gravida at eget metus. Aenean eu leo quam. Pellentesque
                  ornare sem lacinia quam venenatis vestibulum."
                </p>
                <p className="cite">- Juliet Elliott, Cyclist</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide><div className="content-wrapper">
              <div className="content">
                <div className="swiper-avatar">
                  <img src="https://bikes-n-stuff.com/wp-content/uploads/sb-instagram-feed-images/julietelliott.jpg" />
                </div>
                <p>
                  "Duis mollis, est non commodo luctus, nisi erat porttitor
                  ligula, eget lacinia odio sem nec elit. Donec id elit non mi
                  porta gravida at eget metus. Aenean eu leo quam. Pellentesque
                  ornare sem lacinia quam venenatis vestibulum."
                </p>
                <p className="cite">- Juliet Elliott, Cyclist</p>
              </div>
            </div></SwiperSlide>
          <SwiperSlide><div className="content-wrapper">
              <div className="content">
                <div className="swiper-avatar">
                  <img src="https://bikes-n-stuff.com/wp-content/uploads/sb-instagram-feed-images/julietelliott.jpg" />
                </div>
                <p>
                  "Duis mollis, est non commodo luctus, nisi erat porttitor
                  ligula, eget lacinia odio sem nec elit. Donec id elit non mi
                  porta gravida at eget metus. Aenean eu leo quam. Pellentesque
                  ornare sem lacinia quam venenatis vestibulum."
                </p>
                <p className="cite">- Juliet Elliott, Cyclist</p>
              </div>
            </div></SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          {/* <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide> */}
        </div>
      </Swiper>
    </>
  );
};

export default Testimonials;
