import { Container } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import HotelTable from "../Components/Reports/HotelTable";
import RoomTable from "../Components/Reports/RoomTable";
import BedTable from "../Components/Reports/BedTable";
import FacilityTable from "../Components/Reports/FacilityTable";

function Reports() {
  return (
    <Container className="mt-4">
      <Tabs
        defaultActiveKey="RoomList"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="HotelList" title="Hotel List">
          <HotelTable />
        </Tab>
        <Tab eventKey="RoomList" title="Room List">
          <RoomTable />
        </Tab>
        <Tab eventKey="BedList" title="Bed List">
          <BedTable />
        </Tab>
        <Tab eventKey="HotelFacility" title="HotelFacility">
          <FacilityTable />
        </Tab>
      </Tabs>
    </Container>
  );
}

export default Reports;
