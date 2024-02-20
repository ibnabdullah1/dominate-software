import Table from "react-bootstrap/Table";

function RoomTable() {
  return (
    <Table bordered hover>
      <thead>
        <tr>
          <th>Room Id</th>
          <th>Room Name</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Single</td>
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

export default RoomTable;
