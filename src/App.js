 
import "./App.css";
import ReactFlow, { Background, Controls } from "reactflow";
import "reactflow/dist/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Side_menu from "./components/side_menu";
import IVR_panel from "./components/IVR_main_panel";



function App() {
  return (
    <Container className="border">
      <Row>
        <Col md={2}>
          <Side_menu/>
        </Col>
        <Col md={10}>
          <IVR_panel/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
