import React from "react";
import "./ProjectCard.scss";
import SectionTitle from "../SectionTitle/SectionTitle";
import InfoTags from "../InfoTags/InfoTags";

export default function ProjectCard({ img, name, date }) {
  return (
    <div className="projectCard">
      <div className="cardContainer">
        <div className="projectImg">
          <img src={img} alt="" />
        </div>
        <div className="projectContent">
          <div className="bgBlur"></div>
          <div className="contentContainer">
            <div className="containerMain">
              <SectionTitle title={"Portfolio Website"} />
              <div className="projectName">{name}</div>
              <InfoTags id={"btn"} title={date} />
            </div>
            <div className="projectBtn">
              <i className="fa-solid fa-arrow-down-long"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
