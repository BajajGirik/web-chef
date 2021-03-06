import React from "react";
import {
  PHONE_NUMBER,
  EMAIL,
  HOME_ADDRESS,
  PIN_CODE,
  INSTAGRAM,
  FACEBOOK,
  WHATSAPP_LINK,
  EMAIL_LINK,
} from "../../utils/constants";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="Footer-container flex j-around">
      {/* HomeChef  */}
      <div className="Footer-list-container flex-c">
        <div className="Footer-list-header">HOMECHEF</div>
        <Link className="Footer-list-item link grey" to="/tnc">
          Terms & Conditions
        </Link>
        <Link className="Footer-list-item link grey" to="/privacypolicy">
          Privacy Policy
        </Link>
        <Link className="Footer-list-item link grey" to="/refundpolicy">
          Refund Policy
        </Link>
      </div>

      {/* Contact Us  */}
      <div className="Footer-list-container flex-c">
        <span className="Footer-list-header">CONTACT US</span>
        <a
          className="Footer-list-item link flex al-center"
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon className="icon bg-whatsapp" />
          <span className="display-text blue">{PHONE_NUMBER}</span>
        </a>
        <a
          className="Footer-list-item link flex al-center"
          href={EMAIL_LINK}
          target="_blank"
          rel="noopener noreferrer"
        >
          <EmailIcon className="icon bg-mail" />
          <span className="display-text blue">{EMAIL}</span>
        </a>
        <div className="Footer-list-item flex al-center">
          <HomeIcon className="icon bg-home" />
          <span className="display-text grey">
            {HOME_ADDRESS + " - " + PIN_CODE}
          </span>
        </div>
      </div>

      {/* Follow Us  */}
      <div className="Footer-list-container flex-c">
        <span className="Footer-list-header">FOLLOW US</span>
        <a
          className="Footer-list-item link flex al-center"
          href={INSTAGRAM.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon className="icon bg-insta" />
          <span className="display-text blue">{INSTAGRAM.id}</span>
        </a>
        <a
          className="Footer-list-item link flex al-center"
          href={FACEBOOK.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon className="icon bg-facebook" />
          <span className="display-text blue">{FACEBOOK.id}</span>
        </a>
      </div>
    </div>
  );
}

export default Footer;
