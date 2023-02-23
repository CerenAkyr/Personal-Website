import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import './HomePageComponents.css';

function ProjectItem(props) {
  return (
    <Container className="projectItem">
      <Row>
        <Col><h1>{props.name}</h1></Col>
        <Col><h2>{props.languages}</h2></Col>
      </Row>
      <Row>
        <Col><p>{props.explanation}</p></Col>
      </Row>
    </Container>
  );
}
export default ProjectItem;   
