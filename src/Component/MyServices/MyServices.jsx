import React from 'react';
import './MyServices.scss';
import SectionTitle from '../SectionTitle/SectionTitle';

export default function MyServices() {
  return (
    <section id="myServices">
      <div className="myServices">
        <div className="myServicesContainer">
          <div className="titleDot">
            <SectionTitle title={"My Services"} />
          </div>
        </div>
      </div>
    </section>
  );
}
