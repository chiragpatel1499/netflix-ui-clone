import React from "react";
import classes from "./moviecard.module.css";

const MovieCard = (props) => {
  return (
    <React.Fragment>
      <div className={classes["movie-card"]}>
        <img src={props.imageUrl} className={classes["movie-card-image"]} />
        <div className={classes["movie-card-details"]}>
          <p>Inspiration Emotional Action</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MovieCard;
