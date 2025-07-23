import React from 'react';
import './Project.scss'
import Work1 from '../../assets/Images/works-1.jpg'
import SectionTitle from '../SectionTitle/SectionTitle';
import InfoTags from '../InfoTags/InfoTags';
export default function Projects() {
  return (
      <section id='projects'>
          <div className="projects">
              <div className="projectCard">
                  <div className="cardContainer">
                      <div className="projectImg">
                          <img src={Work1} alt="" />
                      </div>
                      <div className="projectContent">
                          <SectionTitle title={'Portfolio Website'} />
                          <div className="projectName">
                             My Portfolio
                          </div>
                          <InfoTags title={'july 2025'}/>
                      <div className="projectBtn">
                          <i className='fa-solid fa-bars'></i>
                      </div>
                      </div>
                  </div>
              </div>
          </div>
      
    </section>
  );
}
