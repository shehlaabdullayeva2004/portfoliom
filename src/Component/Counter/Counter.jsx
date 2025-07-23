import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import './Counter.scss';

export default function Counter({ name,content }) {
  return (
    <div className="counter">
      <p>
        <SectionTitle title={name}/>
      </p>
          <h1>{ content} </h1>
      </div>
      
  );
}
