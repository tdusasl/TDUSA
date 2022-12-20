import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import muralee from "../../assets/img/testimonial/muraleetharan.jpeg";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Testimonials = () => {
  return (
    <div className="testimonials">
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
          200: {
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
                  <img className="testimonial-img" src={muralee} />
                </div>
                <p>
                  "I really admire the services render by TDUSA to upgrade the
                  education level of students in GCE(O/L), GCE(A/L) and to the
                  students in need. The members of this association are hard
                  working and committed to their vision. I wish them success in
                  all their endeavours."
                </p>
                <p className="cite">
                  - Mrs.J.J.Muraleetharan
                  <br/>
                   Secretary Ministry of Health ,
                  <br/>
                  Indigenous Medicine , Probation and child care , Social
                  welfare and Rural Electrification.
                  <br/>
                   Eastern Province,
                  Trincomalee
                </p>
              </div>
            </div>
          </SwiperSlide>
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
        </div>
      </Swiper>
    </div>
  );
};

export default Testimonials;
