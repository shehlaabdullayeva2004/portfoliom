import React from "react";
import "./ProfileCard.scss";
import Profile from "../../assets/Images/profilee.webp";
import { Link } from "react-router-dom";


export default function ProfileCard() {
  return (
    // <div className="profileCardContainer">
    // </div>
      <div className="profileCard">
        <div className="profileHead">
          <span className="name">Shehla</span>
          <span className="position">Frontend developer</span>
        </div>
        {/* Profile Img */}
        <div className="profile">
          <div className="cardImg">
            <img src={Profile} alt="" />
          </div>
          
        </div>
        <div className="cardMail">
          <p>shahlaabdullayevaa@gmail.com</p>
          <span>Baku,Azerbaijan</span>
        </div>
        <div className="cardIcons">
          <Link to={"https://www.github.com/?lang=az_AZ"} className="cardIcon">
            <i className="fa-brands fa-github"></i>
          </Link>
          <Link
            to={"https://www.instagram.com/?lang=az_AZ"}
            className="cardIcon"
          >
            <i className="fa-brands fa-instagram"></i>
          </Link>
          <Link
            to={"https://www.whatsapp.com/?lang=az_AZ"}
            className="cardIcon"
          >
            <i className="fa-brands fa-whatsapp"></i>
          </Link>
          <Link to={"https://www.linkedin.com/"} className="cardIcon">
            <i className="fa-brands fa-linkedin"></i>
          </Link>
        </div>

        <Link
          className="cardContact"
          to={"https://mail.google.com/mail/u/0/#inbox"}
        >
          <p>Get started</p>
          <div className="cardIcon">
            <i className="fa-solid fa-arrow-right-long"></i>
          </div>
        </Link>
      </div>
  );
}
