import "./Footer.css";
import logo from "../../assets/img/logo/logo.png";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { MdOutlineCopyright } from "react-icons/md";
import { MdOutlineRateReview } from "react-icons/md";
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
            <a
              target="_blank"
              href="https://www.facebook.com/tdusa"
              rel="noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              target="_blank"
              href="https://www.youtube.com/@learnthroughtdusa4758"
              rel="noreferrer"
            >
              <AiOutlineYoutube />
            </a>
          </div>
          <div className="item-title">
            <p>GIVE A REVIEW</p>
            <div></div>
            <div className=" review-section ">
              <a href="https://www.google.com/search?q=tdusasl.org&rlz=1CDGOYI_enLK883LK883&hl=en-GB&sxsrf=ALiCzsaEOsrxE0IkmD7SOAepRP-6lISasQ%3A1671900221201&ei=PSynY_DPC56jseMPkKi7kAQ&oq=tdusa&gs_lcp=ChNtb2JpbGUtZ3dzLXdpei1zZXJwEAEYADIHCCMQsAMQJzIHCAAQsAMQQzIKCAAQgAQQsAMQCjIKCAAQgAQQsAMQCjIKCAAQgAQQsAMQCjIKCAAQgAQQsAMQCjIKCAAQgAQQsAMQCjIKCAAQgAQQsAMQCjIKCAAQgAQQsAMQCjIKCAAQgAQQsAMQCjIKCAAQgAQQsAMQCjISCC4QxwEQ0QMQyAMQsAMQQxgBMhIILhDHARDRAxDIAxCwAxBDGAEyDwguEIAEEMgDELADEAoYAUoECEEYAVAAWABgigxoAHAAeACAAcACiAHAApIBAzMtMZgBAMgBDsABAdoBBAgBGAg&sclient=mobile-gws-wiz-serp#lpg=cid:CgIgAQ%3D%3D&trex=m_t:lcl_akp,rc_ludocids:13038919846375916024,rc_q:tdusasl.org,ru_gwp:0%252C7,ru_q:tdusasl.org,trex_id:Jdi3Ge" 
              target="_blank"
              rel="noreferrer"
              >
                <MdOutlineRateReview />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-section">
        <MdOutlineCopyright className="copyright" />
        <div>
          All Rights Reserved By Trincomalee District University Students'
          Association. 2025
        </div>
      </div>
    </div>
  );
};
export default Footer;
