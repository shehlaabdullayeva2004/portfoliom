import React from "react";
import "./Experience.scss";
import SectionTitle from "../SectionTitle/SectionTitle";
import InfoTags from "../InfoTags/InfoTags";

export default function Experience() {
  return (
    <section id="experience">
      <div className="experience">
        <div className="experienceHead">
          <div className="titleDot">
            <SectionTitle title={"Experience"} />
          </div>
          <p className="headText">
            I will offers more than just a place to live it’s a space designed
            to reflect your unique style inspiration
          </p>
        </div>
        <div className="experiencedContent">
          <SectionTitle title={"BirSayt"} />
          <div className="jobDate">
            <p>Frontend Developer</p>
            <InfoTags title={"2025"} />
          </div>
          <SectionTitle title={"BirSayt"} />
          <div className="jobDate">
            <p>Frontend Developer</p>
            <InfoTags title={"2025"} />
          </div>
        </div>
      </div>
    </section>
  );
}
