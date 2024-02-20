import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Radio from "../../Components/Radio";
import StarRating from "../../Components/Rating/StarRating";
import "./Form.css";
const Form = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [star, setStar] = useState(0);
  const PropertyTypes = [
    {
      title: "Hotel",
      description:
        "Establishment that provides accommodations, meals, and other services for paying guests (travellers, tourists",
    },
    {
      title: "Hostel",
      description:
        "Budget accommodation (usually shared-room type) rent by individual travellers (backpackers) or groups",
    },

    {
      title: "Villa",
      description:
        "Furnished country house located in countryside area that is often rented for vacation purpose",
    },

    {
      title: "Resort",
      description:
        "A fancy accommodation that is located in a very scenic or sometimes remote location without compromising modern technology and amenities",
    },
    {
      title: "Apartment",
      description:
        "Serviced apartment complex with hotel-style booking system that enables travellers to stay for a period of time",
    },
    {
      title: "Guest House/B&B",
      description:
        "An establishment that offers a spare room in private accommodation (e.g. private house, boarding house). It also provides breakfast",
    },
    {
      title: "Others",
      description: "",
    },
  ];
  const handleStarChange = (starValue) => {
    setStar(starValue);
  };
  const handleRadio = (title, des) => {
    setTitle(title);
    setDescription(des);
  };
  // const [movies, setMovies] = useState();
  // //   http://localhost:5091/api/Movies

  // useEffect(() => {
  //   axios.get("http://localhost:5091/api/Movies").then((data) => {
  //     setMovies(data.data);
  //   });
  // }, []);
  // console.log(movies);

  // const handleDelete = (id) => {
  //   axios.delete(`http://localhost:5091/api/Movies/${id}`).then((res) => {
  //     if (res.data.deletedCount > 0) {
  //       console.log("Food Successfully deleted ");
  //     }
  //   });
  // };
  return (
    <div className="container mx-auto">
      <div className="row  col-12   ">
        <div className=" border pe-3 d-flex align-items-center   pl-4 py-3 col-4 ">
          <p>Create By</p>
        </div>
        <div className=" col-8    border pl-4  py-3">
          <select
            name="userRole"
            className=" px-4 py-2 w-25 text-gray-700 bg-white border border-gray-300 "
          >
            <option value="">Select</option>
            <option value="superAdmin">Super Admin</option>
            <option value="moderator">Moderator</option>
            <option value="otherModerator">Other Moderator</option>
          </select>
        </div>
      </div>
      <div className="row  col-12   ">
        <div className=" border pe-3 d-flex align-items-center   pl-4 py-3 col-4 ">
          <p>Status</p>
        </div>
        <div className=" col-8 border pl-4  py-3">
          <select
            name="userRole"
            className=" px-4 py-2 w-25 text-gray-700 bg-white border border-gray-300 "
          >
            <option value="">Select</option>
            <option value="enabled">Enabled</option>
            <option value="disabled">Disabled</option>
          </select>
        </div>
      </div>
      <div className="row  col-12   ">
        <div className=" border  d-flex align-items-center   pl-4 py-3 col-4 ">
          <p>Hotel Name</p>
        </div>
        <div className=" col-8 border pl-4  py-3">
          <select
            name="userRole"
            className=" px-4 py-2 w-25 text-gray-700 bg-white border border-gray-300 "
          >
            <option value="">Select</option>
            <option value="hotel1">Hotel 1</option>
            <option value="hotel2">Hotel 2</option>
            <option value="hotel3">Hotel 3</option>
          </select>
        </div>
      </div>
      <div className="row  col-12   ">
        <div className=" border pe-3 d-flex align-items-center  pl-4 py-3 col-4 ">
          <p>Does this property have different name previously</p>
        </div>
        <div className=" col-8 border pe-3  py-3">
          <div className="d-flex gap-3">
            <label className="form-check">
              <input
                type="radio"
                name="hotelPreviousName"
                value="yes"
                className="form-check-input mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
              />
              Yes
            </label>
            <label className="form-check">
              <input
                type="radio"
                name="hotelPreviousName"
                value="no"
                className="form-check-input mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
              />
              No
            </label>
          </div>
        </div>
      </div>
      <div className="row  col-12   ">
        <div className=" border pe-3 d-flex align-items-center  pl-4 py-3 col-4 ">
          <p>Does this property have different name previously</p>
        </div>
        <div className=" col-8 border pe-3  py-3">
          <div className="d-flex gap-3">
            <label className="form-check">
              <input
                type="radio"
                name="hotelPreviousName"
                value="yes"
                className="form-check-input mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
              />
              Yes
            </label>
            <label className="form-check">
              <input
                type="radio"
                name="hotelPreviousName"
                value="no"
                className="form-check-input mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
              />
              No
            </label>
          </div>
        </div>
      </div>
      <div className="row col-12">
        <div className="col-4 col-md-4 border d-flex align-items-center pl-4 pl-md-5 py-3">
          <p>Property Type *</p>
        </div>
        <div className="col-8 col-md-8 border pl-4 pl-md-5 py-3">
          {PropertyTypes.map((property, index) => (
            <Radio
              key={index}
              onClick={() =>
                handleRadio(property?.title, property?.description)
              }
              title={property?.title}
              description={property?.description}
            />
          ))}
        </div>
      </div>

      <div className="row  col-12   ">
        <div className=" border pe-3 d-flex align-items-center  pl-4 py-3 col-4 ">
          <p>Star</p>
        </div>
        <div className=" col-8 border pe-3  py-3">
          <div className="d-flex gap-3">
            <StarRating maxStars={5} onChange={handleStarChange} />
          </div>
        </div>
      </div>
      <div className="row  col-12   ">
        <div className=" border pe-3 d-flex align-items-center   pl-4 py-3 col-4 ">
          <p>Phone</p>
        </div>
        <div className=" col-8 border ps-3  py-3">
          <input
            type="text"
            name="phoneNo"
            id="phoneNo"
            placeholder="Phone No"
            className="py-2 px-6 input"
          />
        </div>
      </div>
      <div className="row  col-12   ">
        <div className=" border pe-3 d-flex align-items-center   pl-4 py-3 col-4 ">
          <p>Address</p>
        </div>

        <div className=" col-8 border">
          <div className="">
            <label htmlFor="" className="form-label d-block">
              LOCATION *
            </label>

            <input
              type="text"
              name="phoneNo"
              id="phoneNo"
              className="py-2 px-6 input"
            />
          </div>
          <div className="">
            <label htmlFor="" className="form-label d-block">
              STREET ADDRESS *
            </label>

            <input
              type="text"
              name="phoneNo"
              id="phoneNo"
              className="py-2 px-6 input"
            />
          </div>
          <div className="">
            <label htmlFor="" className="form-label d-block">
              POSTAL CODE *
            </label>

            <input
              type="text"
              name="phoneNo"
              id="phoneNo"
              className="py-2 px-6 input"
            />
          </div>
          <div className="">
            <label htmlFor="" className="form-label d-block">
              COUNTRY *
            </label>

            <select
              name="userRole"
              className="block px-4 py-2 inputSelect bg-white border"
            >
              <option value="">Select</option>
              <option value="USA">United States</option>
              <option value="CAN">Canada</option>
              <option value="GBR">United Kingdom</option>
              <option value="AUS">Australia</option>
              <option value="FRA">France</option>
              <option value="GER">Germany</option>
              <option value="JPN">Japan</option>
              <option value="CHN">China</option>
              <option value="BRA">Brazil</option>
              <option value="RUS">Russia</option>
              <option value="IND">India</option>
              <option value="ITA">Italy</option>
              <option value="ESP">Spain</option>
              <option value="MEX">Mexico</option>
              <option value="KOR">South Korea</option>
              <option value="IDN">Indonesia</option>
              <option value="TUR">Turkey</option>
              <option value="SAU">Saudi Arabia</option>
              <option value="ARG">Argentina</option>
              <option value="ZAF">South Africa</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
