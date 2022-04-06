import React from "react";
import Rating from "@mui/material/Rating";
import "./ResultCard.css";

export default function ResultCard(props) {
  const { show } = props;
  console.log(show, "SHOW");
  return (
    <div class="card">
      <img src={show.show.image?.medium} alt={`${show.show.name} poster`} />
      <div class="container">
        <h4>
          <b>{show.show.name}</b>
        </h4>
        {show.show.rating.average !== null && (
          <Rating
            name="half-rating-read"
            max={10}
            defaultValue={show.show.rating.average}
            precision={0.1}
            readOnly
          />
        )}
      </div>
    </div>
  );
}
