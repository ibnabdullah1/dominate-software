const HotelFacility = () => {
  return (
    <div className="card-body pt-3" style={{ border: "1px solid #ddd" }}>
      <h4 className="card-title"> Hotel Facility </h4>

      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6 mb-3">
          <center>
            <form className="forms-sample" action="" method="post">
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <td> Facelity Type </td>
                    <td>
                      <select
                        className="form-control"
                        name="hotel_facility_type"
                      >
                        <option value="1">24-hours room service</option>
                        <option value="2">24-hours room service</option>
                        <option value="3">Car Parking</option>
                        <option value="4">Coffiee</option>
                        <option value="5">CCTV</option>
                        <option value="6">Internet Service</option>
                        <option value="7">Wifi Service</option>
                        <option value="8">Server</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td> Facelity Name </td>
                    <td>
                      <input
                        type="text"
                        name="hotel_facility_name"
                        className="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td> Facelity Position </td>
                    <td>
                      <input
                        type="number"
                        name="hotel_facility_position"
                        className="form-control"
                      />
                    </td>
                  </tr>

                  <tr>
                    <td> Status </td>
                    <td>
                      <select className="form-control" name="status">
                        <option value="0">Select</option>
                        <option value="1">active</option>
                        <option value="2">Deactive</option>
                      </select>
                    </td>
                  </tr>

                  <tr>
                    <td></td>
                    <td>
                      <button
                        type="submit"
                        className="btn btn-primary float-right btn-submit"
                        name="hotelfacility"
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

export default HotelFacility;
