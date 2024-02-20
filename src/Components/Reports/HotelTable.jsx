import Table from "react-bootstrap/Table";

function HotelTable() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Hotel Id</th>
          <th>Hotel Name</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Hottel Pattaya Thailand</td>
          <td>Active</td>
          <td className="gap-2 d-flex">
            <button className="btn btn-success">Edit</button>
            <button className="btn btn-danger">Delete</button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default HotelTable;
