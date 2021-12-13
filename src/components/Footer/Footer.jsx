import React from "react";
import {
  PHONE_NUMBER,
  EMAIL,
  HOME_ADDRESS,
  PIN_CODE,
  INSTAGRAM,
  FACEBOOK,
} from "../../constants";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import "./Footer.css";

function Footer() {
  return (
    <div className="Footer-container flex j-between">
      {/* HomeChef  */}
      <div className="Footer-list-container flex-c">
        <div className="Footer-list-header">HOMECHEF</div>
        <a className="Footer-list-item link grey" href="#">
          Terms & Conditions
        </a>
        <a className="Footer-list-item link grey" href="#">
          Privacy Policy
        </a>
      </div>

      {/* Contact Us  */}
      <div className="Footer-list-container flex-c">
        <span className="Footer-list-header">CONTACT US</span>
        <a className="Footer-list-item link flex" href="#" target="_blank">
          <WhatsAppIcon className="icon bg-whatsapp" />
          <span className="display-text blue">{PHONE_NUMBER}</span>
        </a>
        <a className="Footer-list-item link flex" href="#" target="_blank">
          <EmailIcon className="icon bg-mail" />
          <span className="display-text blue">{EMAIL}</span>
        </a>
        <div className="Footer-list-item flex">
          <HomeIcon className="icon bg-home" />
          <span className="display-text grey">
            {HOME_ADDRESS + " - " + PIN_CODE}
          </span>
        </div>
      </div>

      {/* Follow Us  */}
      <div className="Footer-list-container flex-c">
        <span className="Footer-list-header">FOLLOW US</span>
        <a className="Footer-list-item link flex" href="#" target="_blank">
          <InstagramIcon className="icon bg-insta" />
          <span className="display-text blue">{INSTAGRAM.id}</span>
        </a>
        <a className="Footer-list-item link flex" href="#" target="_blank">
          <FacebookIcon className="icon bg-facebook" />
          <span className="display-text blue">{FACEBOOK.id}</span>
        </a>
      </div>
    </div>
  );
}

export default Footer;
