import React from "react";
import "./css/ProgressBar.css";

const Filler = ({ w }) => {
  console.log(w);
  return (
    <div className="filler bg-light-green" style={{ width: `${w}` }}></div>
  );
};

export default function ProgressBar({ w }) {
  return (
    <div className="progress-bar ba b--light-green bw1">
      <Filler w={w} />
    </div>
  );
}
