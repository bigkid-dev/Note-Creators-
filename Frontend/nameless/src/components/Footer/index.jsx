import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="coneect-wit">
        <div className="connect-txt">Connect with us:</div>
        <div className="coneect-social">
          <AiOutlineInstagram className="insta" />
          <FaFacebookF className="fac-tw" />
          <AiOutlineTwitter className="fac-tw" />
        </div>
      </div>
      <div className="copyright">&copy; 2023 All Right Reserved Nameless</div>
    </div>
  );
};

export default Footer;
