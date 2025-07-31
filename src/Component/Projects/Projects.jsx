import React from "react";
import "./Projects.scss";
import Work1 from "../../assets/Images/works-1.jpg";
import Work2 from "../../assets/Images/works-2.jpg";

import SectionTitle from "../SectionTitle/SectionTitle";
import ProjectCard from "../ProjectCard/ProjectCard";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

const slideInLeft = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 1 } },
};

export default function Projects() {
  return (
    <section id="projects">
      <div className="projects">
        <div className="titleDot">
          <SectionTitle title={"Selected Works"} />
        </div>

        <motion.div
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Link to={"/project"}>
            <ProjectCard img={Work1} name={"My Portfolio"} date={"May 2025"} />
          </Link>
        </motion.div>

        <motion.div
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <ProjectCard
            img={Work2}
            name={"Car Repairing Website"}
            date={"June 2025"}
          />
        </motion.div>
      </div>
    </section>
  );
}
