import Container from 'react-bootstrap/Container';
import ProjectItem from './ProjectItem';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./sakura.css";
import './HomePageComponents.css';
import arcelik from '../images/arcelik.png';

const projects = [
    {
      id: 1,
      name: 'Teamlink',
      languages: 'Germany',
      explanation: 'A social media platform written in Java that helps organizing the life of sports teams (for computer science first year project)',
    },
    {
        id: 2,
        name: 'Bamberg University',
        languages: 'Germany',
        explanation: 'English B2, German B2',
      },
      {
        id: 3,
        name: 'Bamberg University',
        languages: 'Germany',
        explanation: 'English B2, German B2',
      },
      {
        id: 4,
        name: 'Bamberg University',
        languages: 'Germany',
        explanation: 'English B2, German B2',
      },
  ];

function Projects() {
return (
       <div className='containerProjects'>
        <Row className='pageSeperatorWorkExp'>
                    <Col>
                        <h1>Work Experience</h1>
                        <p>In 2022, I did my summer internship as an R&D software developer at <a target="_blank" href='https://www.arcelikglobal.com/'>Arçelik Global</a>, the second biggest brand in Europe's overall white goods market.</p>
                        <p>In my internship, I implemented an early warning system using Python that detects possible malfunctions in refrigerators before malfunctioning causes the food to rot. The technical service currently uses my project to detect malfunctions.</p>
                    </Col>
                    <Col className="col-md-4">
                    <a target="_blank" href='https://www.arcelikglobal.com/'><img class='internship' src={arcelik} alt="internship company"/></a>
                    </Col>
                </Row>
          <div className='itemHolder'>
            {projects.map((project) => 
                <ProjectItem
                    key = {project.id}
                    name = {project.name}
                    languages = {project.languages}
                    explanation = {project.explanation}
                />
            )}
            </div>
        </div>
);
}
export default Projects;