const AddHotelName = () => {
  return (
    <div className="card-body pt-3" style={{ border: "1px solid #ddd" }}>
      <h4 className="card-title">Add Hotel </h4>

      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6 mb-3">
          <center>
            <form className="forms-sample" action="" method="post">
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <td> Add Hottel </td>
                    <td>
                      <input
                        type="text"
                        name="hotel"
                        className="form-control"
                        placeholder="Hotel Name"
                        required=""
                      />
                    </td>
                  </tr>
                  <tr>
                    <td> Status </td>
                    <td>
                      <select className="form-center" name="status">
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
                        name="addhotel"
                      >
                        {" "}
                        Add
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

export default AddHotelName;
