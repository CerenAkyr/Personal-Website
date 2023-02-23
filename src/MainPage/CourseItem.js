import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


function CourseItem(props) {
  return (
    <Container className="courseItem">
      <Row>
        <Col><h1>{props.name}</h1></Col>
      </Row>
      <Row>
        <Col><p id='coursesP'>{props.explanation}</p></Col>
      </Row>
    </Container>
  );
}
export default CourseItem;   
