const HotelFacilityType = () => {
  return (
    <div className="card-body pt-3" style={{ border: "1px solid #ddd" }}>
      <h4 className="card-title"> Hotel Facility Type </h4>

      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6 mb-3">
          <center>
            <form className="forms-sample" action="" method="post">
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <td> Facelity Name Type </td>
                    <td>
                      <input
                        type="text"
                        name="hotel_facility_type_name"
                        className="form-control"
                        required=""
                      />
                    </td>
                  </tr>
                  <tr>
                    <td> Facelity Position Type </td>
                    <td>
                      <input
                        type="number"
                        name="hotel_facility_type_position"
                        className="form-control"
                        required=""
                      />
                    </td>
                  </tr>
                  <tr>
                    <td> Status Type </td>
                    <td>
                      <select className="form-control" name="status_type">
                        <option value="">Select</option>
                        <option value="1">active</option>
                        <option value="0">Deactive</option>
                      </select>
                    </td>
                  </tr>

                  <tr>
                    <td></td>
                    <td>
                      <button
                        type="submit"
                        className="btn btn-primary float-right btn-submit"
                        name="hotelfacilitytype"
                      >
                        {" "}
                        Booking
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
          </center>
        </div>
      </div>
    </div>
  );
};

export default HotelFacilityType;
