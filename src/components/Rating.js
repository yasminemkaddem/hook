import React, { useState } from "react";

const Rating = ({ rating }) => {
  const [userRating, setUserRating] = useState(rating);

  return (
    <div>
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;

        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={userRating}
              onClick={() => setUserRating(ratingValue)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default Rating;
