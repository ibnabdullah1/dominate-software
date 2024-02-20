import { useState } from "react";
import { GoStarFill } from "react-icons/go";
import { TbReload } from "react-icons/tb";
import "./StarRating.css";
const StarRating = ({ maxStars, onChange }) => {
  const [selectedStars, setSelectedStars] = useState(0);

  const handleStarClick = (starValue) => {
    setSelectedStars(starValue);
    onChange(starValue);
  };

  const handleReloadClick = () => {
    setSelectedStars(0);
    onChange(0);
  };

  return (
    <div className="d-flex gap-2">
      <button onClick={handleReloadClick} className="border-0 bg-white">
        <TbReload />
      </button>

      {[...Array(maxStars)].map((_, index) => (
        <div
          key={index + 1}
          className={`cursor-pointer ${
            index < selectedStars ? "activeColor" : "defaultColor"
          }`}
          onClick={() => handleStarClick(index + 1)}
        >
          <GoStarFill />
        </div>
      ))}
    </div>
  );
};

export default StarRating;
