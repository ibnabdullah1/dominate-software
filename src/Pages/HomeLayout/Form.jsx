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
    <form className="container mx-auto">
      <div className="row  col-12   ">
        <div className=" border pe-3 d-flex align-items-center   pl-4 py-3 col-4 ">
          <p>Create By</p>
        </div>
        <div className=" col-8    border pl-4  py-3">
          <select name="create_by" className="inputSelect w-25">
            <option value="1"> Super Admin </option>
            <option value="2"> Supplier </option>
          </select>
        </div>
      </div>
      <div className="row  col-12   ">
        <div className=" border pe-3 d-flex align-items-center   pl-4 py-3 col-4 ">
          <p>Status</p>
        </div>
        <div className=" col-8 border pl-4  py-3">
          <select name="hotel_status" className="inputSelect w-25">
            <option value="1"> Enabled </option>
            <option value="2"> Disabled </option>
          </select>
        </div>
      </div>
      <div className="row  col-12   ">
        <div className=" border  d-flex align-items-center   pl-4 py-3 col-4 ">
          <p>Hotel Name</p>
        </div>
        <div className=" col-8 border pl-4  py-3">
          <select name="country" className="inputSelect mt-1 w-25">
            <option value="" selected="selected">
              Select Country
            </option>
            <option value="United States">United States</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Afghanistan">Afghanistan</option>
            <option value="Albania">Albania</option>
            <option value="Algeria">Algeria</option>
            <option value="American Samoa">American Samoa</option>
            <option value="Andorra">Andorra</option>
            <option value="Angola">Angola</option>
            <option value="Anguilla">Anguilla</option>
            <option value="Antarctica">Antarctica</option>
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
          <p className="ps-3">Address</p>
        </div>

        <div className=" col-8 border p-3">
          <div className="">
            <label htmlFor="" className="form-label d-block">
              LOCATION <font className="text-danger"> * </font>
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
              STREET ADDRESS <font className="text-danger"> * </font>
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
              POSTAL CODE <font className="text-danger"> * </font>
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
              COUNTRY <font className="text-danger"> * </font>
            </label>

            <select name="country" className="input mt-1">
              <option value="" selected="selected">
                Select Country
              </option>
              <option value="United States">United States</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Afghanistan">Afghanistan</option>
              <option value="Albania">Albania</option>
              <option value="Algeria">Algeria</option>
              <option value="American Samoa">American Samoa</option>
              <option value="Andorra">Andorra</option>
              <option value="Angola">Angola</option>
              <option value="Anguilla">Anguilla</option>
              <option value="Antarctica">Antarctica</option>
            </select>
          </div>
        </div>
      </div>
      <div className="border bg-body-secondary "></div>
      <table>
        <tbody>
          <tr>
            <td colSpan="2">
              <h4> PROPERTY CONTACTS </h4>

              <div className="row">
                <div className="col-sm-6">
                  <table className="table">
                    <tbody>
                      <tr className="table-primary border">
                        <td className="text-left" colSpan="2">
                          Main Contact{" "}
                        </td>
                      </tr>
                      <tr className="border">
                        <td className="ps-3">
                          FULL NAME <font className="text-danger"> * </font>
                        </td>
                        <td className="border">
                          <input
                            type="text"
                            className="form-control inputSelect"
                            placeholder=""
                            name="main_contact_full_name"
                          />{" "}
                        </td>
                      </tr>
                      <tr className="border">
                        <td className="ps-3">
                          {" "}
                          E-MAIL ADDRESS{" "}
                          <font className="text-danger"> * </font>
                        </td>
                        <td className="border">
                          <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            name="main_contact_email"
                          />{" "}
                        </td>
                      </tr>
                      <tr className="border">
                        <td className=" ps-3">
                          {" "}
                          MOBILE NUMBER <font className="text-danger"> * </font>
                        </td>
                        <td className="border">
                          {" "}
                          <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            name="main_contact_mobile_no"
                          />{" "}
                        </td>
                      </tr>
                      <tr className="border">
                        <td className="p-1 ps-3">
                          {" "}
                          OFFICE PHONE NUMBER{" "}
                          <font className="text-danger"> * </font>
                        </td>
                        <td className="border">
                          {" "}
                          <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            name="main_contact_office_phone_no"
                          />{" "}
                        </td>
                      </tr>
                      <tr className="border">
                        <td className="p-1 ps-3"> EXTENSION </td>
                        <td className="border">
                          {" "}
                          <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            name="main_contact_extension"
                          />{" "}
                        </td>
                      </tr>
                      <tr className="border">
                        <td className="p-1 ps-3"> POSITION </td>
                        <td className="border">
                          {" "}
                          <select
                            name="main_contact_position"
                            className="form-control"
                            id="HotelContact0Position"
                            required="required"
                          >
                            <option value="">Select Position</option>
                            <option value="1">General Manager</option>
                            <option value="2">Hotel Manager</option>
                            <option value="3">
                              Executive Assistant Manager
                            </option>
                            <option value="4">
                              Director of Sales and Marketing
                            </option>
                            <option value="5">Director of Sales</option>
                            <option value="6">Director of Revenue</option>
                            <option value="7">Senior Sales Manager</option>
                            <option value="8">Sales Manager</option>
                            <option value="9">Assistant Sales Manager</option>
                            <option value="10">Sales Executive</option>
                            <option value="11">Front Office Manager</option>
                            <option value="12">
                              Assistant Front Office Manager
                            </option>
                            <option value="13">Front Desk Agent</option>
                            <option value="14">Reservation Manager</option>
                            <option value="15">Reservation</option>
                            <option value="16">Ecommerce Manager</option>
                            <option value="17">Ecommerce Executive</option>
                            <option value="18">Revenue Manager</option>
                            <option value="19">Financial Controller</option>
                            <option value="20">Chief Accountant</option>
                            <option value="21">Credit Manager</option>
                            <option value="22">Finance Manager</option>
                            <option value="23">Account Receivable</option>
                            <option value="24">
                              Corporate Director of Revenue
                            </option>
                            <option value="25">
                              Corporate Director of Sales and Marketing
                            </option>
                            <option value="26">
                              Corporate Director of Ecommerce
                            </option>
                            <option value="27">
                              Corporate Ecommerce Manager
                            </option>
                            <option value="28">
                              Corporate Digital Marketing Manager
                            </option>
                            <option value="29">
                              E-Commerce &amp; Digital Marketing Manager
                            </option>
                            <option value="30">Regional Revenue Manager</option>
                            <option value="31">
                              Regional Director of Revenue
                            </option>
                            <option value="32">
                              Regional Ecommerce Manager
                            </option>
                            <option value="33">Ecommerce Consultant</option>
                            <option value="34">Others</option>
                          </select>{" "}
                        </td>
                      </tr>

                      <tr className="border">
                        <td colSpan="2">
                          {" "}
                          <div className="form-check form-check-flat">
                            <label className="form-check-label">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                name="main_contact_contactable_24h"
                                id="flatRadios1"
                                value=""
                              />{" "}
                              Contactable 24 Hours
                              <i className="input-helper"></i>
                            </label>
                          </div>{" "}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="col-sm-6 ">
                  <table className="table">
                    <tbody>
                      <tr className="table-primary border">
                        <td className="text-left" colSpan="2">
                          {" "}
                          Reservation{" "}
                        </td>
                      </tr>
                      <tr className="border">
                        <td className="p-1 ps-3">
                          {" "}
                          FULL NAME <font className="text-danger"> * </font>
                        </td>
                        <td className="border">
                          {" "}
                          <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            name="reservation_full_name"
                          />{" "}
                        </td>
                      </tr>
                      <tr className="border">
                        <td className="p-1 ps-3">
                          {" "}
                          E-MAIL ADDRESS{" "}
                          <font className="text-danger"> * </font>
                        </td>
                        <td className="border">
                          {" "}
                          <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            name="reservation_email"
                          />{" "}
                        </td>
                      </tr>
                      <tr className="border">
                        <td className="p-1 ps-3">
                          {" "}
                          MOBILE NUMBER <font className="text-danger"> * </font>
                        </td>
                        <td className="border">
                          {" "}
                          <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            name="reservation_mobile_no"
                          />{" "}
                        </td>
                      </tr>
                      <tr className="border">
                        <td className="p-1 ps-3">
                          {" "}
                          OFFICE PHONE NUMBER{" "}
                          <font className="text-danger"> * </font>
                        </td>
                        <td className="border">
                          {" "}
                          <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            name="reservation_office_phone_no"
                          />{" "}
                        </td>
                      </tr>
                      <tr className="border">
                        <td className="p-1 ps-3"> EXTENSION </td>
                        <td className="border">
                          {" "}
                          <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            name="reservation_extension"
                          />{" "}
                        </td>
                      </tr>
                      <tr className="border">
                        <td className="p-1 ps-3"> POSITION </td>
                        <td className="border">
                          {" "}
                          <select
                            name="reservation_position"
                            className="form-control"
                            id="HotelContact0Position"
                            required="required"
                          >
                            <option value="">Select Position</option>
                            <option value="1">General Manager</option>
                            <option value="2">Hotel Manager</option>
                            <option value="3">
                              Executive Assistant Manager
                            </option>
                            <option value="4">
                              Director of Sales and Marketing
                            </option>
                            <option value="5">Director of Sales</option>
                            <option value="6">Director of Revenue</option>
                            <option value="7">Senior Sales Manager</option>
                            <option value="8">Sales Manager</option>
                            <option value="9">Assistant Sales Manager</option>
                            <option value="10">Sales Executive</option>
                            <option value="11">Front Office Manager</option>
                            <option value="12">
                              Assistant Front Office Manager
                            </option>
                            <option value="13">Front Desk Agent</option>
                            <option value="14">Reservation Manager</option>
                            <option value="15">Reservation</option>
                            <option value="16">Ecommerce Manager</option>
                            <option value="17">Ecommerce Executive</option>
                            <option value="18">Revenue Manager</option>
                            <option value="19">Financial Controller</option>
                            <option value="20">Chief Accountant</option>
                            <option value="21">Credit Manager</option>
                            <option value="22">Finance Manager</option>
                            <option value="23">Account Receivable</option>
                            <option value="24">
                              Corporate Director of Revenue
                            </option>
                            <option value="25">
                              Corporate Director of Sales and Marketing
                            </option>
                            <option value="26">
                              Corporate Director of Ecommerce
                            </option>
                            <option value="27">
                              Corporate Ecommerce Manager
                            </option>
                            <option value="28">
                              Corporate Digital Marketing Manager
                            </option>
                            <option value="29">
                              E-Commerce &amp; Digital Marketing Manager
                            </option>
                            <option value="30">Regional Revenue Manager</option>
                            <option value="31">
                              Regional Director of Revenue
                            </option>
                            <option value="32">
                              Regional Ecommerce Manager
                            </option>
                            <option value="33">Ecommerce Consultant</option>
                            <option value="34">Others</option>
                          </select>{" "}
                        </td>
                      </tr>
                      <tr className="border">
                        <td colSpan="2">
                          {" "}
                          <div className="form-check form-check-flat">
                            <label className="form-check-label">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                name="reservation_contactable_24h"
                                id="flatRadios1"
                                value="1"
                              />{" "}
                              Contactable 24 Hours
                              <i className="input-helper"></i>
                            </label>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="col-sm-6  mt-5">
                  <table className="table">
                    <tbody>
                      <tr className="table-primary border">
                        <td className="text-left" colSpan="2">
                          {" "}
                          Accounting / Payment{" "}
                        </td>
                      </tr>
                      <tr className="border">
                        <td className="p-1 ps-3">
                          {" "}
                          FULL NAME <font className="text-danger"> * </font>
                        </td>
                        <td className="border">
                          {" "}
                          <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            name="accounting_full_name"
                          />{" "}
                        </td>
                      </tr>
                      <tr className="border">
                        <td className="p-1 ps-3">
                          {" "}
                          E-MAIL ADDRESS{" "}
                          <font className="text-danger"> * </font>
                        </td>
                        <td className="border">
                          {" "}
                          <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            name="accounting_email"
                          />{" "}
                        </td>
                      </tr>
                      <tr className="border">
                        <td className="p-1 ps-3">
                          {" "}
                          MOBILE NUMBER <font className="text-danger"> * </font>
                        </td>
                        <td className="border">
                          {" "}
                          <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            name="accounting_mobile_no"
                          />{" "}
                        </td>
                      </tr>
                      <tr className="border">
                        <td className="p-1 ps-3">
                          {" "}
                          OFFICE PHONE NUMBER{" "}
                          <font className="text-danger"> * </font>
                        </td>
                        <td className="border">
                          {" "}
                          <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            name="accounting_office_mobile_no"
                          />{" "}
                        </td>
                      </tr>
                      <tr className="border">
                        <td className="p-1 ps-3"> EXTENSION </td>
                        <td className="border">
                          {" "}
                          <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            name="accounting_extension"
                          />{" "}
                        </td>
                      </tr>
                      <tr className="border">
                        <td className="p-1 ps-3"> POSITION </td>
                        <td className="border">
                          <select
                            name="accounting_position"
                            className="form-control"
                            id="HotelContact0Position"
                            required="required"
                          >
                            <option value="">Select Position</option>
                            <option value="1">General Manager</option>
                            <option value="2">Hotel Manager</option>
                            <option value="3">
                              Executive Assistant Manager
                            </option>
                            <option value="4">
                              Director of Sales and Marketing
                            </option>
                            <option value="5">Director of Sales</option>
                            <option value="6">Director of Revenue</option>
                            <option value="7">Senior Sales Manager</option>
                            <option value="8">Sales Manager</option>
                            <option value="9">Assistant Sales Manager</option>
                            <option value="10">Sales Executive</option>
                            <option value="11">Front Office Manager</option>
                            <option value="12">
                              Assistant Front Office Manager
                            </option>
                            <option value="13">Front Desk Agent</option>
                            <option value="14">Reservation Manager</option>
                            <option value="15">Reservation</option>
                            <option value="16">Ecommerce Manager</option>
                            <option value="17">Ecommerce Executive</option>
                            <option value="18">Revenue Manager</option>
                            <option value="19">Financial Controller</option>
                            <option value="20">Chief Accountant</option>
                            <option value="21">Credit Manager</option>
                            <option value="22">Finance Manager</option>
                            <option value="23">Account Receivable</option>
                            <option value="24">
                              Corporate Director of Revenue
                            </option>
                            <option value="25">
                              Corporate Director of Sales and Marketing
                            </option>
                            <option value="26">
                              Corporate Director of Ecommerce
                            </option>
                            <option value="27">
                              Corporate Ecommerce Manager
                            </option>
                            <option value="28">
                              Corporate Digital Marketing Manager
                            </option>
                            <option value="29">
                              E-Commerce &amp; Digital Marketing Manager
                            </option>
                            <option value="30">Regional Revenue Manager</option>
                            <option value="31">
                              Regional Director of Revenue
                            </option>
                            <option value="32">
                              Regional Ecommerce Manager
                            </option>
                            <option value="33">Ecommerce Consultant</option>
                            <option value="34">Others</option>
                          </select>{" "}
                        </td>
                      </tr>
                      <tr className="border">
                        <td colSpan="2">
                          {" "}
                          <div className="form-check form-check-flat">
                            <label className="form-check-label">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                name="accounting_contactable_24h"
                                id="flatRadios1"
                                value="1"
                              />{" "}
                              Contactable 24 Hours
                              <i className="input-helper"></i>
                            </label>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <hr />
      <a href="#" className="btn btn-primary float-right">
        Next
      </a>
    </form>
  );
};

export default Form;
