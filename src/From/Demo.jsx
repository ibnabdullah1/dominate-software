const Demo = () => {
  return (
    <form method="post">
      <table className="table">
        <tbody>
          <tr>
            <td className="w-25"> Create By </td>
            <td>
              <select name="create_by" className="form-control w-25">
                <option value="1"> Super Admin </option>
                <option value="2"> Supplier </option>
              </select>
            </td>
          </tr>
          <tr>
            <td className="w-25"> Status </td>
            <td>
              <select name="hotel_status" className="form-control w-25">
                <option value="1"> Enabled </option>
                <option value="2"> Disabled </option>
              </select>
            </td>
          </tr>
          <tr>
            <td className="w-25"> Hotel Name </td>
            <td>
              <select className="form-control w-25" name="hotels_name">
                <option value="0">Select</option>
                <option value="11">Hottel Pattaya Thailand</option>
                <option value="2">Javan Hotel Bangladesh</option>
                <option value="3">The Country Club Hotel</option>
                <option value="7">twine bedjbiub</option>
                <option value="8">Plaza Hotel</option>
                <option value="9">Radison Hotel Bangladesh</option>
                <option value="12">Hotel Panama</option>
                <option value="13">Hotel Hilton</option>
                <option value="14">Bsd Hotel</option>
                <option value="15">Rubel Hotel</option>
                <option value="16">Alamin Hotel</option>
                <option value="17">Shaddique Hotel</option>
                <option value="18">Atik Vai Hotel</option>
                <option value="19">New Sheraton</option>
                <option value="20">Hotel 1</option>
                <option value="21">Hotel 2</option>
              </select>
            </td>
          </tr>
          <tr>
            <td className="w-25">
              {" "}
              Does this property have <br /> different name previously?{" "}
            </td>
            <td>
              <div className="row padding">
                <div className="col-md-2">
                  <div
                    className="form-radio form-radio-flat"
                    onClick="show_pre_name(1)"
                  >
                    <label className="form-check-label">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="previous_name"
                        id="previous_name"
                        value="1"
                      />{" "}
                      Yes
                      <i className="input-helper"></i>
                    </label>
                  </div>
                </div>
                <div className="col-md-2">
                  <div
                    className="form-radio form-radio-flat"
                    onClick="show_pre_name(2)"
                  >
                    <label className="form-check-label">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="previous_name"
                        id="previous_name"
                        value="2"
                        checked=""
                      />{" "}
                      No
                      <i className="input-helper"></i>
                    </label>
                  </div>
                </div>
              </div>
            </td>
          </tr>

          <tr className="pre_name_tr">
            <td className="w-25"> Previous Name </td>
            <td>
              <input
                type="text"
                placeholder="Previous Name"
                name="previous_name_text"
                className="form-control"
              />
            </td>
          </tr>

          <tr>
            <td>
              {" "}
              Does this property belong <br /> to particular hotel chain?{" "}
            </td>
            <td>
              <div className="row padding">
                <div className="col-md-2">
                  <div className="form-radio form-radio-flat">
                    <label className="form-check-label">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="have_chain"
                        id="have_chain"
                        value="1"
                      />{" "}
                      Yes
                      <i className="input-helper"></i>
                    </label>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="form-radio form-radio-flat">
                    <label className="form-check-label">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="have_chain"
                        id="have_chain"
                        value="2"
                        checked=""
                      />{" "}
                      No
                      <i className="input-helper" />
                    </label>
                  </div>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td className="w-25"> Phone </td>
            <td>
              <div className="col-md-8">
                <input
                  type="text"
                  className="form-control"
                  name="phone_no"
                  placeholder="Phone No"
                />
              </div>
            </td>
          </tr>

          <tr>
            <td className="w-25"> Address </td>
            <td>
              <div className="row">
                <div className="col-md-8 mt-3">
                  LOCATION <font className="text-danger">*</font>
                  <br />
                  <input
                    type="text"
                    className="form-control mt-1"
                    name="location"
                  />
                </div>
                <div className="col-md-8 mt-3">
                  STREET ADDRESS <font className="text-danger">*</font>
                  <br />
                  <textarea
                    type="text"
                    className="form-control mt-1"
                    name="street_address"
                  ></textarea>
                </div>
                <div className="col-md-8 mt-3">
                  POSTAL CODE <font className="text-danger">*</font>
                  <br />
                  <input
                    type="text"
                    className="form-control mt-1"
                    name="postal_code"
                  />
                </div>

                <div className="col-md-8 mt-3">
                  COUNTRY <font className="text-danger">*</font>
                  <br />
                  <select name="country" className="form-control mt-1">
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
            </td>
          </tr>

          <tr>
            <td className="w-25"> Deposit / Commission </td>
            <td className="">
              <table>
                <tbody>
                  <tr>
                    <td className="p-0">
                      <select
                        className="form-control"
                        name="deposit_commission_type"
                      >
                        <option value="1"> Fixed </option>
                        <option value="2"> Percentage </option>
                      </select>
                    </td>
                    <td>
                      {" "}
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Value"
                        name="deposit_commission_value"
                      />{" "}
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>

          <tr>
            <td className="w-25"> vat Tax </td>
            <td className="">
              <table>
                <tbody>
                  <tr>
                    <td className="p-0">
                      {" "}
                      <select className="form-control" name="val_tax_type">
                        <option value="1"> Fixed </option>
                        <option value="2"> Percentage </option>
                      </select>{" "}
                    </td>
                    <td>
                      {" "}
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Value"
                        name="val_tax_value"
                      />{" "}
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>

          <tr>
            <td className="w-25"> Image </td>
            <td className="">
              <input type="file" className="form-control" name="hotel_image" />
            </td>
          </tr>

          <tr>
            <td colSpan="2">
              <h4> PROPERTY CONTACTS </h4>

              <div className="row">
                <div className="col-sm-6 pl-0">
                  <table className="table">
                    <tbody>
                      <tr className="table-primary">
                        <td className="text-left" colSpan="2">
                          {" "}
                          Main Contact{" "}
                        </td>
                      </tr>
                      <tr>
                        <td className="p-1 pl-3">
                          {" "}
                          FULL NAME <font className="text-danger"> * </font>
                        </td>
                        <td>
                          {" "}
                          <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            name="main_contact_full_name"
                          />{" "}
                        </td>
                      </tr>
                      <tr>
                        <td className="p-1 pl-3">
                          {" "}
                          E-MAIL ADDRESS{" "}
                          <font className="text-danger"> * </font>
                        </td>
                        <td>
                          {" "}
                          <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            name="main_contact_email"
                          />{" "}
                        </td>
                      </tr>
                      <tr>
                        <td className="p-1 pl-3">
                          {" "}
                          MOBILE NUMBER <font className="text-danger"> * </font>
                        </td>
                        <td>
                          {" "}
                          <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            name="main_contact_mobile_no"
                          />{" "}
                        </td>
                      </tr>
                      <tr>
                        <td className="p-1 pl-3">
                          {" "}
                          OFFICE PHONE NUMBER{" "}
                          <font className="text-danger"> * </font>
                        </td>
                        <td>
                          {" "}
                          <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            name="main_contact_office_phone_no"
                          />{" "}
                        </td>
                      </tr>
                      <tr>
                        <td className="p-1 pl-3"> EXTENSION </td>
                        <td>
                          {" "}
                          <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            name="main_contact_extension"
                          />{" "}
                        </td>
                      </tr>
                      <tr>
                        <td className="p-1 pl-3"> POSITION </td>
                        <td>
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

                      <tr>
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

                <div className="col-sm-6 pr-0">
                  <table className="table">
                    <tbody>
                      <tr className="table-primary">
                        <td className="text-left" colSpan="2">
                          {" "}
                          Reservation{" "}
                        </td>
                      </tr>
                      <tr>
                        <td className="p-1 pl-3">
                          {" "}
                          FULL NAME <font className="text-danger"> * </font>
                        </td>
                        <td>
                          {" "}
                          <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            name="reservation_full_name"
                          />{" "}
                        </td>
                      </tr>
                      <tr>
                        <td className="p-1 pl-3">
                          {" "}
                          E-MAIL ADDRESS{" "}
                          <font className="text-danger"> * </font>
                        </td>
                        <td>
                          {" "}
                          <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            name="reservation_email"
                          />{" "}
                        </td>
                      </tr>
                      <tr>
                        <td className="p-1 pl-3">
                          {" "}
                          MOBILE NUMBER <font className="text-danger"> * </font>
                        </td>
                        <td>
                          {" "}
                          <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            name="reservation_mobile_no"
                          />{" "}
                        </td>
                      </tr>
                      <tr>
                        <td className="p-1 pl-3">
                          {" "}
                          OFFICE PHONE NUMBER{" "}
                          <font className="text-danger"> * </font>
                        </td>
                        <td>
                          {" "}
                          <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            name="reservation_office_phone_no"
                          />{" "}
                        </td>
                      </tr>
                      <tr>
                        <td className="p-1 pl-3"> EXTENSION </td>
                        <td>
                          {" "}
                          <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            name="reservation_extension"
                          />{" "}
                        </td>
                      </tr>
                      <tr>
                        <td className="p-1 pl-3"> POSITION </td>
                        <td>
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
                      <tr>
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

                <div className="col-sm-6 pl-0 mt-5">
                  <table className="table">
                    <tbody>
                      <tr className="table-primary">
                        <td className="text-left" colSpan="2">
                          {" "}
                          Accounting / Payment{" "}
                        </td>
                      </tr>
                      <tr>
                        <td className="p-1 pl-3">
                          {" "}
                          FULL NAME <font className="text-danger"> * </font>
                        </td>
                        <td>
                          {" "}
                          <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            name="accounting_full_name"
                          />{" "}
                        </td>
                      </tr>
                      <tr>
                        <td className="p-1 pl-3">
                          {" "}
                          E-MAIL ADDRESS{" "}
                          <font className="text-danger"> * </font>
                        </td>
                        <td>
                          {" "}
                          <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            name="accounting_email"
                          />{" "}
                        </td>
                      </tr>
                      <tr>
                        <td className="p-1 pl-3">
                          {" "}
                          MOBILE NUMBER <font className="text-danger"> * </font>
                        </td>
                        <td>
                          {" "}
                          <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            name="accounting_mobile_no"
                          />{" "}
                        </td>
                      </tr>
                      <tr>
                        <td className="p-1 pl-3">
                          {" "}
                          OFFICE PHONE NUMBER{" "}
                          <font className="text-danger"> * </font>
                        </td>
                        <td>
                          {" "}
                          <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            name="accounting_office_mobile_no"
                          />{" "}
                        </td>
                      </tr>
                      <tr>
                        <td className="p-1 pl-3"> EXTENSION </td>
                        <td>
                          {" "}
                          <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            name="accounting_extension"
                          />{" "}
                        </td>
                      </tr>
                      <tr>
                        <td className="p-1 pl-3"> POSITION </td>
                        <td>
                          {" "}
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
                      <tr>
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

export default Demo;
