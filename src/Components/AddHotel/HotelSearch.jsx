const HotelSearch = () => {
  return (
    <div className="card-body pt-3" style={{ border: "1px solid #ddd" }}>
      <h4
        className="card-title btn btn-inverse-secondary form-control"
        style={{ fontSize: "18px", fontWeight: "bold" }}
      >
        <b> Hotel Search </b>{" "}
      </h4>

      <form className="forms-sample">
        <div className="row">
          <div className="col-sm-12">
            <table
              id="example"
              className="table table-striped dataTable no-footer"
              style={{ width: "100%" }}
              role="grid"
              aria-describedby="example_info"
            >
              <thead>
                <tr role="row">
                  <th
                    className="sorting_asc"
                    tabIndex="0"
                    aria-controls="example"
                    rowSpan="1"
                    colSpan="1"
                    aria-sort="ascending"
                    aria-label="Hotel Id: activate to sort column descending"
                    style={{ width: "194px" }}
                  >
                    Hotel Id
                  </th>
                  <th
                    className="sorting"
                    tabIndex="0"
                    aria-controls="example"
                    rowSpan="1"
                    colSpan="1"
                    aria-label="Hotel Name: activate to sort column ascending"
                    style={{ width: "424px" }}
                  >
                    Hotel Name
                  </th>
                  <th
                    className="sorting"
                    tabIndex="0"
                    aria-controls="example"
                    rowSpan="1"
                    colSpan="1"
                    aria-label="Status: activate to sort column ascending"
                    style={{ width: "177px" }}
                  >
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr role="row" className="odd">
                  <td className="sorting_1">2</td>
                  <td>Javan Hotel Bangladesh</td>
                  <td>Active </td>
                </tr>
                <tr role="row" className="even">
                  <td className="sorting_1">3</td>
                  <td>The Country Club Hotel</td>
                  <td>Active </td>
                </tr>
                <tr role="row" className="odd">
                  <td className="sorting_1">7</td>
                  <td>twine bedjbiub</td>
                  <td>Active </td>
                </tr>
                <tr role="row" className="even">
                  <td className="sorting_1">8</td>
                  <td>Plaza Hotel</td>
                  <td>Active </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </form>
    </div>
  );
};

export default HotelSearch;
