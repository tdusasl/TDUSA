import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import muralee from "../../assets/img/testimonial/muraleetharan.jpeg";
import bishop from "../../assets/img/testimonial/bishop.png";
import pde from "../../assets/img/testimonial/PDE.jpg";

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
                  <img className="testimonial-img" src={muralee} alt='' />
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
                  <br />
                  Secretary Ministry of Health ,
                  <br />
                  Indigenous Medicine , Probation and child care , Social
                  welfare and Rural Electrification.
                  <br />
                  Eastern Province, Trincomalee
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="content-wrapper">
              <div className="content">
                <div className="swiper-avatar">
                  <img src={bishop} alt='' />
                </div>
                <p>
                  I am immensely proud to wish the Trincomalee District
                  University Students' Organisation on their first issue of the
                  book "Thihazholi". The organisation strives to uplift the
                  educational standards of Trincomalee students. It's a timely
                  need for O/L, A/L and University students, which helps them
                  get proper guidance. The issue of the book "Thihazholi" in
                  order to depict their service over the past 25 years and to
                  appreciate the members who worked their best, is a highly
                  appreciatable act. I wish all the best for the organisation's
                  growth and for the betterment of the students and society.
                </p>
                <p className="cite">Rt. Rev. Dr. Christian Noel Emmanuel
                <br/>
                Bishop of Trincomalee
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="content-wrapper">
              <div className="content">
                <div className="swiper-avatar">
                  <img src={pde} alt='' />
                </div>
                <p>
                  In the year 2021, the eastern province achieved the places of
                  1st for the O/L examination and 4th for the A/L examination. I
                  strongly believe that TDUSA has made a considerable amount of
                  impact on this achievement. I am proud that the organisation
                  is doing many impressive acts including academic development,
                  encouraging extra-curricular activities, conducting cultural
                  events like Thai Pongal, conducting competitions and giving
                  aid to students with financial needs. I wish the very best on
                  the release of "Thihazholi" and immensely wish for the
                  continuous development of TDUSA.
                </p>
                <p className="cite">Mrs. N. Pillainayagam
                <br/>
                Provincial Education Director
                <br/>
                Eastern Province
                </p>
              </div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
};

export default Testimonials;
