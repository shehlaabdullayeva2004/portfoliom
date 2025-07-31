import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./AcademicProfil.scss";

export default function AcademicProfil() {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection((prev) => (prev === section ? null : section));
  };

  return (
    <section>
      <div className="academicProfil">
        <div className="titleDot">
          <SectionTitle title={"Academic Background"} />
        </div>
        <div className="academicProfilContainer">
          <div className="sectionHead">
            <span>Education and Experience</span>
          </div>

          {/* Education */}
          <div
            className={`education ${
              activeSection === "education" ? "active" : ""
            }`}
            onClick={() => toggleSection("education")}
          >
            <i className="fa-solid fa-graduation-cap"></i>
            <p>Education</p>
          </div>

          <AnimatePresence>
            {activeSection === "education" && (
              <motion.div
                className="educationDetails"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                style={{ overflow: "hidden" }}
              >
                <ul>
                  <li>Bachelor’s in Information Technology, AAU (2020–2024)</li>
                  <li>Code Academy Full-Stack Certificate (2024)</li>
                  <li>High School with Distinction (2019)</li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Experience */}
          <div
            className={`education ${
              activeSection === "experience" ? "active" : ""
            }`}
            onClick={() => toggleSection("experience")}
          >
            <i className="fa-solid fa-briefcase"></i>
            <p>Experience</p>
          </div>

          <AnimatePresence>
            {activeSection === "experience" && (
              <motion.div
                className="educationDetails"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                style={{ overflow: "hidden" }}
              >
                <ul>
                  <li>Frontend Developer Intern at TechSoft (2024)</li>
                  <li>Freelance Web Developer (2023–2024)</li>
                  <li>Student Assistant at AAU IT Lab (2022–2023)</li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
