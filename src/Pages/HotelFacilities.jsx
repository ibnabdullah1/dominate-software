import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";

function HotelFacilities() {
  return (
    <Container className="mt-4">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Facility Type</Form.Label>
          <Form.Select aria-label="facility type">
            <option>Select Facility</option>
            <option value="24h">24 Hours Room Services</option>
            <option value="carParking">Card Parking</option>
            <option value="coffee">Coffee</option>
            <option value="internet">Internet</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="facilityyname">
          <Form.Label>Facility Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Facility Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="facilityPosition">
          <Form.Label>Facility Position</Form.Label>
          <Form.Control type="number" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Status</Form.Label>
          <Form.Select aria-label="Status">
            <option>Select Status</option>
            <option value="active">Active</option>
            <option value="deactive">Deactive</option>
          </Form.Select>
        </Form.Group>
        <button className="btn btn-primary mt-4 w-100">Booking</button>
      </Form>
    </Container>
  );
}

export default HotelFacilities;
