import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <header className="header" id="header">
      <nav className="nav container">
        <a href="https://github.com/slaviboy" className="nav__logo">
          slaviboy
        </a>
        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                <i className="bx bx-home-alt"></i>
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="bx bx-user"></i>
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <i className="bx bx-book"></i>
              </a>
            </li>
            <li className="nav__item">
              <a href="#work" className="nav__link">
                <i className="bx bx-briefcase-alt-2"></i>
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="bx bx-message-square-detail"></i>
              </a>
            </li>
          </ul>
        </div>

        {/* <!-- Theme change button --> */}
        <div className="nav__buttons">
          <i className="bx bx-moon change-theme" id="theme-button"></i>
          <i className="bx bx-globe change-theme" id="language-button"></i>
        </div>
      </nav>
    </header>

    <main className="main">
      <section className="home section" id="home">
        <canvas id="canvas"></canvas>
        <div className="home__container container grid">
          <div className="home__data">
            <span className="home__greeting">Hello, I'm</span>
            <h1 className="home__name">Stanislav Georgiev</h1>
            <h3 className="home__education">Android Developer</h3>

            <div className="home__buttons">
              <a
                download=""
                href="./assets/pdf/CV_EN.pdf"
                className="button button--ghost"
              >
                Download CV
              </a>
              <a href="#about" className="button">
                About me
              </a>
            </div>
          </div>

          <div className="home__handle">
            <img src="./assets/img/profile.png" alt="" className="home__img" />
          </div>
          <div className="home__social">
            <a
              href="https://www.linkedin.com/in/slaviboy/"
              target="_blank"
              className="home__social-link"
              rel="noreferrer"
            >
              <i className="bx bxl-linkedin-square"></i>
            </a>
            <a
              href="https://github.com/slaviboy"
              target="_blank"
              className="home__social-link"
              rel="noreferrer"
            >
              <i className="bx bxl-github"></i>
            </a>
            <a
              href="https://play.google.com/store/apps/dev?id=6258983568190164698&hl=en&gl=US"
              target="_blank"
              className="home__social-link"
              rel="noreferrer"
            >
              <i className="bx bxl-play-store"></i>
            </a>
          </div>

          <a href="#about" className="home__scroll">
            <i className="bx bx-mouse home__scroll-icon"></i>
            <span className="home__scroll-name">Scroll Down</span>
          </a>
        </div>
      </section>
      <section className="about section" id="about">
        <span className="section__subtitle">My Intro</span>
        <h2 className="section__title">About Me</h2>

        <div className="about__container container grid">
          <img src="./assets/img/about.png" alt="" className="about__img" />

          <div className="about__data">
            <div className="about__info">
              <div className="about__box">
                <i className="bx bx-award about__icon"></i>
                <h3 className="about__title">Experience</h3>
                <span className="about__subtitle">+5 Years</span>
              </div>
              <div className="about__box">
                <i className="bx bx-briefcase-alt about__icon"></i>
                <h3 className="about__title">Completed</h3>
                <span className="about__subtitle">13+ Projects</span>
              </div>
              <div className="about__box">
                <i className="bx bx-support about__icon"></i>
                <h3 className="about__title">Support</h3>
                <span className="about__subtitle">Online 24/7</span>
              </div>
            </div>

            <p className="about__description">
              Android Developer, working mainly with Kotlin. Loves creating
              complex Android Views and Composables.
            </p>

            <a href="#contact" className="button">
              Contact Me
            </a>
          </div>
        </div>
      </section>
      <section className="skills section" id="skills">
        <span className="section__subtitle">My abilities</span>
        <h2 className="section__title">My Experience</h2>

        <div className="skills__container container grid">
          <div className="skills__content">
            <h3 className="skills__title">Android Development</h3>

            <div className="skills__box">
              <div className="skills__group">
                <div className="skills__data">
                  <i className="bx bxs-badge-check"></i>
                  <div>
                    <h3 className="skills__name">Design Patterns</h3>
                    <span className="skills__level">(MVP/MVC/MVVM)</span>
                  </div>
                </div>

                <div className="skills__data">
                  <i className="bx bxs-badge-check"></i>
                  <div>
                    <h3 className="skills__name">Database</h3>
                    <span className="skills__level">(Room, Firebase)</span>
                  </div>
                </div>

                <div className="skills__data">
                  <i className="bx bxs-badge-check"></i>
                  <div>
                    <h3 className="skills__name">OpenGL</h3>
                    <span className="skills__level">(GLES 2.0/3.0)</span>
                  </div>
                </div>
              </div>
              <div className="skills__group">
                <div className="skills__data">
                  <i className="bx bxs-badge-check"></i>
                  <div>
                    <h3 className="skills__name">Version control</h3>
                    <span className="skills__level">(Git & GitHub)</span>
                  </div>
                </div>

                <div className="skills__data">
                  <i className="bx bxs-badge-check"></i>
                  <div>
                    <h3 className="skills__name">Dependency Injection</h3>
                    <span className="skills__level">Dagger-Hilt</span>
                  </div>
                </div>

                <div className="skills__data">
                  <i className="bx bxs-badge-check"></i>
                  <div>
                    <h3 className="skills__name">Livedata</h3>
                    <span className="skills__level">
                      (Flow, StateFlow, SharedFlow, LiveData)
                    </span>
                  </div>
                </div>
              </div>
              <div className="skills__group">
                <div className="skills__data">
                  <i className="bx bxs-badge-check"></i>
                  <div>
                    <h3 className="skills__name">API</h3>
                    <span className="skills__level">
                      (Retrofit2, Volley, Moshi, GSON)
                    </span>
                  </div>
                </div>

                <div className="skills__data">
                  <i className="bx bxs-badge-check"></i>
                  <div>
                    <h3 className="skills__name">Unit Test</h3>
                    <span className="skills__level">(Unit, UI, End-to-End)</span>
                  </div>
                </div>

                <div className="skills__data">
                  <i className="bx bxs-badge-check"></i>
                  <div>
                    <h3 className="skills__name">Components</h3>
                    <span className="skills__level">(Services)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="skills__content">
            <h3 className="skills__title">Languages</h3>

            <div className="skills__box">
              <div className="skills__group">
                <div className="skills__data">
                  <i className="bx bxs-badge-check"></i>
                  <div>
                    <h3 className="skills__name">Kotlin</h3>
                    <span className="skills__level">(9/10)</span>
                  </div>
                </div>

                <div className="skills__data">
                  <i className="bx bxs-badge-check"></i>
                  <div>
                    <h3 className="skills__name">Java</h3>
                    <span className="skills__level">(8/10)</span>
                  </div>
                </div>
              </div>
              <div className="skills__group">
                <div className="skills__data">
                  <i className="bx bxs-badge-check"></i>
                  <div>
                    <h3 className="skills__name">JS</h3>
                    <span className="skills__level">(8/10)</span>
                  </div>
                </div>

                <div className="skills__data">
                  <i className="bx bxs-badge-check"></i>
                  <div>
                    <h3 className="skills__name">MySQL</h3>
                    <span className="skills__level">(7/10)</span>
                  </div>
                </div>
              </div>
              <div className="skills__group">
                <div className="skills__data">
                  <i className="bx bxs-badge-check"></i>
                  <div>
                    <h3 className="skills__name">C#</h3>
                    <span className="skills__level">(7/10)</span>
                  </div>
                </div>

                <div className="skills__data">
                  <i className="bx bxs-badge-check"></i>
                  <div>
                    <h3 className="skills__name">C++</h3>
                    <span className="skills__level">(5/10)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="work section" id="work">
        <span className="section__subtitle">My Portfolio</span>
        <h2 className="section__title">Recent Works</h2>

        <div className="work__filters">
          <span className="work__item active-work" data-filter="all">
            All
          </span>
          <span className="work__item" data-filter=".android">
            Android
          </span>
          <span className="work__item" data-filter=".web">
            Web
          </span>
          <span className="work__item" data-filter=".design">
            Design
          </span>
        </div>

        <div className="work__container container grid">
          <div className="work__card mix android">
            <img
              id="low_poly_art"
              src="./assets/img/work1-d.png"
              alt=""
              className="work__img"
            />
            <h3 className="work__title">Low Poly Art</h3>
            <a
              href="https://play.google.com/store/apps/details?id=com.slaviboy.lowpolyart&hl=en_US&gl=US"
              target="_blank"
              className="work__button"
              rel="noreferrer"
            >
              Visit <i className="bx bx-right-arrow-alt work__icon"></i>
            </a>
          </div>

          <div className="work__card mix android">
            <img
              id="weather"
              src="./assets/img/work7-d.png"
              alt=""
              className="work__img"
            />
            <h3 className="work__title">Weather</h3>
            <a href="#" target="_blank" className="work__button">
              Visit <i className="bx bx-right-arrow-alt work__icon"></i>
            </a>
          </div>

          <div className="work__card mix android">
            <img
              id="universal_dictionary"
              src="./assets/img/work2-d.png"
              alt=""
              className="work__img"
            />
            <h3 className="work__title">Universal Dictionary</h3>
            <a
              href="https://play.google.com/store/apps/details?id=com.slaviboy.universaldictionarybg&hl=en_US&gl=US"
              target="_blank"
              className="work__button"
              rel="noreferrer"
            >
              Visit <i className="bx bx-right-arrow-alt work__icon"></i>
            </a>
          </div>

          <div className="work__card mix android">
            <img
              id="chromata"
              src="./assets/img/work3-d.png"
              alt=""
              className="work__img"
            />
            <h3 className="work__title">Chromata</h3>
            <a
              href="https://play.google.com/store/apps/details?id=com.slaviboy.colorblindtest&hl=en_US&gl=US"
              target="_blank"
              className="work__button"
              rel="noreferrer"
            >
              Visit <i className="bx bx-right-arrow-alt work__icon"></i>
            </a>
          </div>

          <div className="work__card mix android">
            <img
              id="music_visualizer"
              src="./assets/img/work4-d.png"
              alt=""
              className="work__img"
            />
            <h3 className="work__title">Music Visualizer</h3>
            <a
              href="https://play.google.com/store/apps/details?id=com.slaviboy.musicvisualizer&hl=en_US&gl=US"
              target="_blank"
              className="work__button"
              rel="noreferrer"
            >
              Visit <i className="bx bx-right-arrow-alt work__icon"></i>
            </a>
          </div>

          <div className="work__card mix android">
            <img
              id="galaxy_simulator"
              src="./assets/img/work5-d.png"
              alt=""
              className="work__img"
            />
            <h3 className="work__title">Galaxy Simulator</h3>
            <a
              href="https://play.google.com/store/apps/details?id=com.slaviboy.galaxy&hl=en_US&gl=US"
              target="_blank"
              className="work__button"
              rel="noreferrer"
            >
              Visit <i className="bx bx-right-arrow-alt work__icon"></i>
            </a>
          </div>

          <div className="work__card mix web">
            <img
              id="virtual_piano"
              src="./assets/img/work6-d.png"
              alt=""
              className="work__img"
            />
            <h3 className="work__title">Virtual Piano</h3>
            <a
              href="https://slaviboy.github.io/VirtualPiano/"
              target="_blank"
              className="work__button"
              rel="noreferrer"
            >
              Demo <i className="bx bx-right-arrow-alt work__icon"></i>
            </a>
          </div>
        </div>
      </section>
      <section className="testimonial section">
        <span className="section__subtitle">My Client</span>
        <h2 className="section__title">Testimonial</h2>

        <div className="testimonial__container container swiper">
          <div className="swiper-wrapper">
            <div className="testimonial__card swiper-slide">
              <img
                src="./assets/img/testimonial1.png"
                alt=""
                className="testimonial__img"
              />
              <h3 className="testimonial__name">none</h3>
              <p className="testimonial__description">none</p>
            </div>

            <div className="testimonial__card swiper-slide">
              <img
                src="./assets/img/testimonial2.png"
                alt=""
                className="testimonial__img"
              />
              <h3 className="testimonial__name">none</h3>
              <p className="testimonial__description">none</p>
            </div>

            <div className="testimonial__card swiper-slide">
              <img
                src="./assets/img/testimonial3.png"
                alt=""
                className="testimonial__img"
              />
              <h3 className="testimonial__name">none</h3>
              <p className="testimonial__description">none</p>
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </section>
      <section className="contact section" id="contact">
        <span className="section__subtitle">Get in touch</span>
        <h2 className="section__title">Contact me</h2>

        <div className="contact__container container grid">
          <div className="contact__content">
            <h3 className="contact__title">Connect with me</h3>

            <div className="contact__info">
              <div className="contact__card">
                <i className="bx bx-mail-send contact__card-icon"></i>
                <h3 className="contact__card-title">Email</h3>
                <span className="contact__card-data">
                  slavi94slavi94@gmail.com
                </span>

                <a
                  href="mailto:slavi94slavi94@gmail.com"
                  target="_blank"
                  className="contact__button"
                >
                  Write me{" "}
                  <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                </a>
              </div>

              <div className="contact__card">
                <i className="bx bxl-linkedin-square contact__card-icon"></i>
                <h3 className="contact__card-title">Linkedin</h3>
                <span className="contact__card-data">
                  https://www.linkedin.com/in/slaviboy/
                </span>

                <a
                  href="https://www.linkedin.com/in/slaviboy/"
                  target="_blank"
                  className="contact__button"
                >
                  Write me{" "}
                  <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                </a>
              </div>

              <div className="contact__card disabled">
                <i className="bx bxl-messenger contact__card-icon"></i>
                <h3 className="contact__card-title">Messanger</h3>
                <span className="contact__card-data">none</span>

                <a
                  href="#"
                  target="_blank"
                  className="contact__button"
                  aria-current="page"
                >
                  Write me{" "}
                  <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="contact__content">
            <h3 className="contact__title">Send direct message</h3>

            <form className="contact__form">
              <div className="contact__form-div">
                <label htmlFor="" className="contact__form-tag">
                  Email
                </label>
                <input
                  id="client_email"
                  type="text"
                  placeholder="youremail@gmail.com"
                  className="contact__form-input"
                />
              </div>
              <div className="contact__form-div">
                <label htmlFor="" className="contact__form-tag">
                  Subject
                </label>
                <input
                  id="client_subject"
                  type="text"
                  placeholder="Email subject"
                  className="contact__form-input"
                />
              </div>
              <div className="contact__form-div contact__form-area">
                <label htmlFor="" className="contact__form-tag">
                  Message
                </label>
                <textarea
                  id="client_message"

                  placeholder="Write your message here"
                  className="contact__form-input"
                ></textarea>
              </div>

              <button type="submit" id="send_email" className="button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer__container container">
          <h1 className="footer__title">Stanislav Georgiev</h1>

          <ul className="footer__list">
            <li>
              <a href="#about" className="footer__link">
                About
              </a>
            </li>
            <li>
              <a href="#work" className="footer__link">
                Projects
              </a>
            </li>
            <li>
              <a href="#skills" className="footer__link">
                Experience
              </a>
            </li>
          </ul>

          <ul className="footer__social">
            <a href="" target="_blank" className="footer__social-link">
              <i className="bx bxl-facebook"></i>
            </a>

            <a href="" target="_blank" className="footer__social-link">
              <i className="bx bxl-instagram"></i>
            </a>

            <a href="" target="_blank" className="footer__social-link">
              <i className="bx bxl-twitter"></i>
            </a>
          </ul>

          <span className="footer__copy"></span>
        </div>
      </footer>
    </main>
  </div>
  );
}

export default App;
