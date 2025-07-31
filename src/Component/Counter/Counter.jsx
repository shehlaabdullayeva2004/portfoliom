import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./Counter.scss";

export default function Counter({ name, content }) {
  return (
    <div className="counter">
      <div>
        <SectionTitle title={name} />
      </div>
      <h1>{content} </h1>
    </div>
  );
}
