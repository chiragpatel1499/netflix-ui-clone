import React, { useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import classes from "./moviecarousel.module.css";

const MovieCarousel = (props) => {
  return (
    <React.Fragment>
      <div className={classes["movie-carousel"]}>
        <div className={classes["movie-carousel-title"]}>
          <p>{props.carouselTitle}</p>
        </div>
        <div className={classes["movie-carousel-cards"]}>
          <div className={classes["movie-carousel-arrow-before"]}>
            <a href="#card5">
              <img src="icons/navigate_before_white_48dp.svg" />
            </a>
          </div>
          <div className={classes["movie-carousel-card"]}>
            <MovieCard id="card1" imageUrl="https://static2.tribute.ca/poster/660x980/cursed-netflix-146253.jpg" />
            <MovieCard imageUrl="https://keralakaumudi.com/web-news/en/2020/12/NMAN0202474/image/the-gray-man.1.884621.jpg" />
            <MovieCard imageUrl="https://i1.wp.com/bloody-disgusting.com/wp-content/uploads/2020/09/devil-all-the-time.png" />
            <MovieCard imageUrl="https://www.teahub.io/photos/full/218-2189033_movie-poster-mute-netflix.png" />
            <MovieCard imageUrl="https://static2.tribute.ca/poster/660x980/cursed-netflix-146253.jpg" />
            <MovieCard id="card5" imageUrl="https://keralakaumudi.com/web-news/en/2020/12/NMAN0202474/image/the-gray-man.1.884621.jpg" />
            {/* <MovieCard imageUrl="https://i1.wp.com/bloody-disgusting.com/wp-content/uploads/2020/09/devil-all-the-time.png" /> */}
            {/* <MovieCard imageUrl="https://www.teahub.io/photos/full/218-2189033_movie-poster-mute-netflix.png" /> */}
          </div>
          <div className={classes["movie-carousel-arrow-next"]}>
            <a>
              <img src="icons/navigate_next_white_48dp.svg" />
            </a>
          </div>
          {/* <MovieCard imageUrl='https://wallpapercave.com/wp/wp1917131.jpg'/> */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default MovieCarousel;
