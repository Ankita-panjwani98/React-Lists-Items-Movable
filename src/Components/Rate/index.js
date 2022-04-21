import React, { useMemo, useState } from "react";
import "./index.css";

function Rate({ count, rating, color, onRating }) {
  const [hoverRating, setHoverRating] = useState(0);

  const getColor = (index) => {
    // console.log("index inside COLOR: ", );
    if (hoverRating >= index) {
      return color.filled;
    }
     else if (!hoverRating && rating >= index) {
      return color.filled;
    }
    return color.unfilled;
  };

  const starRating = useMemo(() => {
    // console.log("Count", count);

    return Array(count)
      .fill(0)
      .map((_, i) => i + 1)
      .map((idx) => (
        <span className="star"   key={idx}>
          <i        
            className="fa fa-star"
            style={{ color: getColor(idx) }}
            onClick={() => onRating(idx)}
            onMouseEnter={() => setHoverRating(idx)}
            onMouseLeave={() => setHoverRating(0)}
          ></i>
        </span>
      ));
  }, [count, rating, hoverRating]);

  return (
    <div className="star-section">
      {starRating}
      <p> Rating is: {rating}</p>
    </div>
  );
}

export default Rate;
