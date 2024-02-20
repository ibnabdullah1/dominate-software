const Rooms = () => {
  return (
    <div className="card-body pt-3" style={{ border: "1px solid #ddd" }}>
      <h4
        className="card-title btn btn-inverse-secondary form-control"
        style={{ fontSize: "18px", fontWeight: "bold" }}
      >
        {" "}
        <b> Room Management </b>{" "}
      </h4>

      <a
        href="new_room.php"
        className="btn btn-success mr-2 pl-0 pr-0 mb-2"
        style={{ width: "70px" }}
      >
        <i className="mdi mdi-plus"></i> Add{" "}
      </a>

      <form className="forms-sample">
        <div className="row">
          <div className="col-md-12">
            <div className="col-md-7"></div>

            <div className="table-responsive">
              <table
                className="table table-bordered table-hover"
                style={{ width: "100%" }}
              >
                <thead className="bg-light">
                  <tr>
                    <th className="p-3">
                      {" "}
                      <input type="checkbox" />{" "}
                    </th>
                    <th className="p-3"> Id </th>
                    <th className="p-3"> Room </th>
                    <th className="p-3"> Bed Type </th>
                    <th className="p-3"> Hotel </th>
                    <th className="p-3"> Qty </th>
                    <th className="p-3"> Price </th>
                    <th className="p-3"> Prices </th>
                    <th className="p-3"> Gallery </th>
                    <th className="p-3"> Action </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className="p-2"> 1 </td>
                    <td> 1 </td>
                    <td className="p-2"> Duplex </td>
                    <td className="p-2"> twine bed </td>
                    <td className="p-2">
                      {" "}
                      <a href="hotel_room_list.php?id=9">
                        {" "}
                        Radison Hotel Bangladesh{" "}
                      </a>{" "}
                    </td>
                    <td className="p-2"> 2 </td>
                    <td className="p-2"> 250000 </td>
                    <td className="p-2">
                      {" "}
                      <a href="room_price.php?id=1"> Prices </a>{" "}
                    </td>

                    <td className="p-2">
                      <center>
                        <a
                          href="gallery_management_room.php?room_id=1"
                          style={{ textDecoration: "none" }}
                        >
                          <span
                            className="badge badge-danger"
                            style={{
                              position: "absolute",
                              marginTop: "-10px",
                              marginLeft: "-10px",
                            }}
                          >
                            {" "}
                            4{" "}
                          </span>
                          <img
                            src="../images/hotel/bedroom_1559142719.webp"
                            style={{ width: "50px", borderRadius: "0px" }}
                          />
                        </a>
                      </center>
                    </td>

                    <td>
                      <a
                        href="rooms_single_view.php?id=1"
                        className="btn btn-primary btn-xs"
                      >
                        x{" "}
                      </a>
                      <a
                        href="room_delete.php?id=1"
                        className="btn btn-danger btn-xs"
                      >
                        x{" "}
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Rooms;
