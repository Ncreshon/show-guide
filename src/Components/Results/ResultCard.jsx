import React from "react";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button"
import moment from "moment";
import "./ResultCard.css";

export default function ResultCard(props) {
  const { show } = props;
  console.log(show, "SHOW");
  return (

    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
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
        <div class="flip-card-back">
          <h1>{show.show.name}</h1>
          <p>
            <span className="header">Premiere Date:</span>{" "}
            {moment(show.show.premiered).format("MMMM Do YYYY")}
          </p>
          {show.show.ended && (
            <p>
              <span className="header">End Date:</span>{" "}
              {moment(show.show.ended).format("MMMM Do YYYY")}
            </p>
          )}

          {show.show.genres.length > 0 && (
            <p>
              <span className="header">Genre:</span>{" "}
              {show.show.genres.map((genre) => {
                return <span>{genre}, </span>;
              })}
            </p>
          )}
          {show.show.network?.name && (
            <p>
              <span className="header">Network: </span>{" "}
              {show.show.network?.name}
            </p>
          )}
          <p className="summary">
            <span className="header ">Summary: </span>{" "}
            {show.show.summary.replace(new RegExp("<[^>]*>", "g"), "")}
          </p>
          <Button variant="outlined" onClick={()=>{console.log('Get Cast List')}}>Get Cast List</Button>
          <Button variant="outlined" onClick={()=>{console.log('Get Episode List')}}>Get Episode List</Button>
        </div>
      </div>
    </div>
  );
}
