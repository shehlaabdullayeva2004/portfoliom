import React from 'react';
import './Projects.scss'
import Work1 from '../../assets/Images/works-1.jpg';
import Work2 from "../../assets/Images/works-2.jpg";

import SectionTitle from '../SectionTitle/SectionTitle';
import InfoTags from '../InfoTags/InfoTags';
import ProjectCard from '../ProjectCard/ProjectCard';
import { Link } from 'react-router-dom';
export default function Projects() {
  return (
    <section id="projects">
      <div className="projects">
        <div className="titleDot">
          <SectionTitle title={"Selected Works"} />
        </div>
        <Link to={"/project"}>
          <ProjectCard img={Work1} name={"My Portfolio"} date={"may 2025"} />
        </Link>
        <ProjectCard
          img={Work2}
          name={"Car Repairing Website "}
          date={"june 2025"}
        />
      </div>
    </section>
  );
}
