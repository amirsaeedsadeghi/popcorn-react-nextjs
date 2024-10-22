'use client'

import { useState } from "react";
import PropTypes from "prop-types";
import { HiStar, HiOutlineStar } from "react-icons/hi2"

Rating.propTypes = {
  maxStar: PropTypes.number,
  message: PropTypes.array,
  defaultRating: PropTypes.number,
  onSetRating: PropTypes.func,
};

export default function Rating({
  maxStar = 5,
  message = [],
  defaultRating = 0,
  onSetRating,
}) {
  const [currStar, setCurrStar] = useState(defaultRating);
  const [tempStar, setTempStar] = useState(0);

  function handleRate(rate) {
    setCurrStar(rate);
    onSetRating(rate);
  }

  return (
    <div className="flex flex-row justify-between items-center my-6 mx-0 py-0 px-2 gap-3">
      <div className="flex items-center">
        {Array.from({ length: maxStar }, (_, index) => (
          <Star
            key={index}
            onRate={() => handleRate(index + 1)}
            star={tempStar ? tempStar >= index + 1 : currStar >= index + 1}
            onHoverIn={() => setTempStar(index + 1)}
            onHoveOut={() => setTempStar(0)}
          />
        ))}
      </div>

      {message.length === maxStar ? (
        <span className="text-amber-500 text-2xl drop-shadow-md">
          {message[tempStar - 1] || message[currStar - 1] || "0"}
        </span>
      ) : (
        <span className="text-amber-500 text-2xl drop-shadow-md">{tempStar || currStar || "0"}</span>
      )}

    </div>
  );
}

function Star({ star, onRate, onHoverIn, onHoverOut }) {
  return (
    <span
      role="button"
      onClick={onRate}
      onMouseEnter={onHoverIn}
      onMouseLeave={onHoverOut}
    >
      {star ? <HiStar className="text-amber-500 drop-shadow-md text-2xl" /> : <HiOutlineStar className="text-amber-500 drop-shadow-md text-2xl" />}
    </span>
  );
}
