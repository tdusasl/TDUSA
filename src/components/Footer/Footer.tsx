import "./Footer.css";
import logo from "../../assets/img/logo/logo.png";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { MdOutlineCopyright } from "react-icons/md";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-flex">
        <div>
          <div className="footer-logo">
            <img src={logo} alt="" />
            <h2>TDUSA</h2>
          </div>
          <div>
            <p>STUDIES DETERMINE FUTURE</p>
            <p className="address-container">
              Town Hall Premises, Dockyard Road
              <br />
              Trincomalee
              <br />
              Sri Lanka
            </p>
          </div>
        </div>
        <div>
          <div className="item-title">
            <p>GET IN TOUCH</p>
            <div></div>
          </div>
          <div className="contact-section">
            <h3>E-MAIL US</h3>
            <p>
              <a href="mailto:tdusa.sl@gmail.com">tdusasl@gmail.com</a>
            </p>
            <h3>CALL US</h3>
            <p>+94 760075370</p>
          </div>
        </div>
        <div>
          <div className="item-title">
            <p>FOLLOW</p>
            <div></div>
          </div>
          <div className="social-media-container">
          <a target="_blank" href="https://www.facebook.com/tdusa" rel="noreferrer">
            <FaFacebook />
            </a>
            <a target="_blank" href="https://www.youtube.com/@learnthroughtdusa4758" rel="noreferrer">
            <AiOutlineYoutube />
            </a>
          </div>
          <div className="item-title review-section">
            <p>GIVE A REVIEW</p>
            <div></div>
          </div>
        </div>
      </div>
      <div className="copyright-section">
        <MdOutlineCopyright className="copyright" />
        <div>
          All Rights Reserved By Trincomalee District University Students'
          Association. 2022
        </div>
      </div>
    </div>
  );
};
export default Footer;
