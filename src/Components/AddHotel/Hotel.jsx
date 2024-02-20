const Hotel = () => {
  return (
    <div className="table-responsive">
      <table
        className="table table-bordered table-hover"
        style={{ width: "100%" }}
      >
        <thead className="bg-light">
          <tr>
            <th className="p-3">
              <input type="checkbox" />{" "}
            </th>
            <th className="p-3"> Hotel ID </th>
            <th className="p-3"> Name </th>
            <th className="p-3"> Star </th>
            <th className="p-3"> Create By </th>
            <th className="p-3"> Location </th>
            <th className="p-3"> Gallery </th>
            <th className="p-3"> Order </th>
            <th className="p-3"> Status </th>
            <th className="p-3"> Action </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="p-2"> 1</td>
            <td className="p-2">
              <a href="hotel_view.php"> 2019001 </a>{" "}
            </td>
            <td className="p-2"> </td>
            <td className="p-2">
              <i
                className="fa fa-star fa-lg text-warning"
                aria-hidden="true"
                style={{ cursor: "pointer" }}
              ></i>
              <i
                className="fa fa-star fa-lg text-warning"
                aria-hidden="true"
                style={{ cursor: "pointer" }}
              ></i>
              <i
                className="fa fa-star fa-lg text-warning"
                aria-hidden="true"
                style={{ cursor: "pointer" }}
              ></i>
            </td>
            <td className="p-2"> Super Admin </td>
            <td className="p-2"> Thailand </td>
            <td className="p-2">
              <center>
                <a
                  href="gallery_management.php?hotel_id=1"
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
                    20
                  </span>
                  <img
                    src="../images/hotel/hotel_view_1559076903.jpg"
                    style={{ width: "50px", borderRadius: "0px" }}
                  />
                </a>
              </center>
            </td>
            <td className="p-2">
              <input type="text" className="form-control" />
            </td>

            <td className="p-2">
              <center>
                <i className="fa fa-check text-success" aria-hidden="true"></i>
              </center>
            </td>

            <td>
              <a href="hotel_view.php?id=1" className="btn btn-primary btn-xs">
                x
              </a>
              <a href="hotel_edit.php" className="btn btn-info btn-xs">
                x
              </a>
              <a href="hotel_delete.php?id=1" className="btn btn-danger btn-xs">
                x
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Hotel;
