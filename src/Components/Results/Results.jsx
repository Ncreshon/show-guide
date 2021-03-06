import React from "react";
import ResultCard from "./ResultCard";

import "./Results.css";


export default function Results(props) {
  const { shows } = props;

  return (
    <div className="results">
      {" "}
   { shows.length ?  shows.map((show, i) => {
        return (
          <ResultCard key={i} show={show} />
        );
      }) : <h1>Search For A Show</h1>}
    </div>
  );
}
