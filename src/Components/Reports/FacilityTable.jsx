import Table from "react-bootstrap/Table";

function FacilityTable() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Facility Id</th>
          <th>Facility Name</th>
          <th>Position</th>
          <th>Status</th>
          <th>Created By</th>
          <th>Created Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Softwarew</td>
          <td>2</td>
          <td>Active</td>
          <td>Super Admin</td>
          <td>2020-02-04 18:51:50 pm</td>
          <td className="gap-2 d-flex">
            <button className="btn btn-success">Edit</button>
            <button className="btn btn-danger">Delete</button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default FacilityTable;
