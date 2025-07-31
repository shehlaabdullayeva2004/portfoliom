import React from "react";
import "./Experience.scss";
import SectionTitle from "../SectionTitle/SectionTitle";
import InfoTags from "../InfoTags/InfoTags";
import { motion } from "framer-motion";

const fadeFromLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  },
};

export default function Experience() {
  return (
    <section id="experience">
      <div className="experience">
        <motion.div
          className="experienceHead"
          variants={fadeFromLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="titleDot">
            <SectionTitle title={"Experience"} />
          </div>
          <p className="headText">
            I will offer more than just a place to live – it’s a space designed
            to reflect your unique style and inspiration.
          </p>
        </motion.div>

        <motion.div
          className="experiencedContent"
          variants={fadeFromLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
        >
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
        </motion.div>
      </div>
    </section>
  );
}
