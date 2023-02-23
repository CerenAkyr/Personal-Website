import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import './HomePageComponents.css';

function ProjectItem(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p id="coursesP">{props.explanation1}</p>
      <p id="coursesP">{props.explanation2}</p>
      <p id="coursesP">{props.explanation3}</p>
    </div>
  );
}
export default ProjectItem;   
