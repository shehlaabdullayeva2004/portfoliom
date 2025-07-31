import React from "react";
import "./Introduction.scss";
import InfoTags from "../InfoTags/InfoTags";
import Counter from "../Counter/Counter";
import SectionTitle from "../SectionTitle/SectionTitle";
import { TypeAnimation } from "react-type-animation";


export default function Introduction() {

  return (
    <section id="introduction" className="">
      <div className="introduction">
        <div className="introMain">
          <div className="titleDot">
            <span>
              <SectionTitle title={"Introduction"} />
            </span>
          </div>
          <div className="introHead">
        
              {" "}
              <TypeAnimation
                sequence={["Making Your World a Pain Free Experience", 500]}
                style={{ fontSize: "60px" }}
                repeat={Infinity}
              />
           
          </div>
          <div className="introText">
            <p>
              I am a Frontend Developer with a passion for creating dynamic and
              responsive web applications. I specialize in React.js and have a
              strong foundation in HTML, CSS, and JavaScript.
            </p>
          </div>
        </div>
        <div className="introTags">
          <InfoTags title={"Branding"} />
          <InfoTags title={"React"} />
          <InfoTags title={"Frontend"} />
          <InfoTags title={"Web Development"} />
        </div>
        <div className="introCounter">
          <Counter
            content={"1+year"}
            name={<SectionTitle title={"experience"} />}
          />
          <Counter content={"3+"} name={<SectionTitle title={"projects"} />} />
        </div>
      </div>
    </section>
  );
}
