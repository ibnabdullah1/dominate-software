import { IoIosCheckmarkCircle } from "react-icons/io";
import { CgRadioCheck } from "react-icons/cg";
import { useState } from "react";

const Radio = ({ title, description, onClick }) => {
  const [checked, setChecked] = useState(false);

  const handleRadioClick = () => {
    setChecked(!checked);
    onClick();
  };

  return (
    <div className="">
      <div
        onClick={handleRadioClick}
        className="d-flex gap-1 align-items-start"
      >
        <input
          type="radio"
          name="hotelType"
          className="me-1 mt-1 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
        />

        <h5 className="fw-semibold">{title}</h5>
      </div>
      <p className="ps-5">{description}</p>
    </div>
  );
};

export default Radio;
