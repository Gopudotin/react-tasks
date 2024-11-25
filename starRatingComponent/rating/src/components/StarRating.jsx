import React, { useState } from "react";

const StarRating = ({ totalStars = 5, initialRating = 0 }) => {
  const [currentRating, setCurrentRating] = useState(initialRating);

  const handleClick = (index) => {
    setCurrentRating(index+1)
  }
  return (
    <div>
      <h1>StarRating</h1>
      <h3>Current Rating:{currentRating}</h3>
      <div>
        {Array.from({ length: totalStars }, (_, index) => (
          <span key={index}
            style={{fontSize:"24px",cursor:"pointer",color : index < currentRating? "gold":"gray"}} 
        
            onClick={()=>handleClick(index)}
          >{index < currentRating? "★": "☆"}</span>
        ))}
      </div>
    </div>
  );
};

export default StarRating;
