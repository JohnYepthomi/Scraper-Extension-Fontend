import ModeSelection from "../components/modeselection";
import NoTask from "../components/notask";
import Task from "../components/task";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Home() {
  return (
    <Container>
      <Row>
        <Col>
          <ModeSelection />
        </Col>
      </Row>

      <Row>
        <Col>
          <NoTask />
        </Col>
      </Row>
    </Container>
  );
}
