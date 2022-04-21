import React, { useState } from "react";
import Rate from "../../Components/Rate";
import "./index.css";

const initialState = {
    filled: '#DBA800',
    unfilled: '#808080'
}
function Rating() {
    const [rating, setRating] = useState(0);
    const [color, setColor] = useState(initialState);
  return (
    <div>
      <div className="triangle-top"></div>
      <div className="star-middle-section">
        {/* <h1>STAR RATING COMPONENT</h1> */}
        <p>STAR RATING COMPONENT</p>
        <p className="small-text">
          Can be used in Parent Components like MoviesListPage, RestaurantsListPage,
          RateMePage, Blogs, etc.
        </p>
        <div className="rating-container">
          <Rate count={5} rating={rating} onRating={(rate)=>setRating(rate)} color={color} />
        </div>
      </div>
      <div className="triangle-bottom"></div>
    </div>
  );
}

export default Rating;
