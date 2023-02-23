import Container from 'react-bootstrap/Container';
import ProjectItem from './ProjectItem';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./sakura.css";
import './HomePageComponents.css';
import arcelik from '../images/arcelik.png';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const projects = [
  {
    id: 1,
    name: 'Teamlink',
    explanation1: 'A social media platform written in Java that helps organizing the life of sports teams (for computer science first year project).' ,
    explanation2: 'Got A grade.' ,
    explanation3: 'I acted as a front-end developer',
  },
  {
    id: 2,
    name: 'Erasmus Manager',
    explanation1: 'A website to manage Erasmus applications at Bilkent University.',
    explanation2: 'I acted as a requirement engineer and front-end developer.',
    explanation3: 'I used React for developing',
  },
  {
    id: 3,
    name: 'Online Pharmacy: Medicine Delivery System',
    explanation1: 'A website to manage pharmacy orders and deliveries.',
    explanation2: 'I acted as a requirement engineer and front-end developer.',
    explanation3: 'I used React for developing',
  },
  {
    id: 4,
    name: 'Tarot Reader (Hobby Project)',
    explanation1: 'Tarot Reader Website consists of a login system containing user information that will be used for a tarot reading and several tarot reading technics with an output of the result.',
    explanation2: 'Implemented using SQL, HTML, CSS, and PHP.',
    explanation3: '',
  },
  {
    id: 5,
    name: 'TEKNOFEST Tourism Competition Project',
    explanation1: 'I was the team leader of 6 computer engineers',
    explanation2: 'Implemented a mobile multiplayer game based on Google Map APIs using Flutter, Spring',
    explanation3: '',
  },
  {
    id: 6,
    name: 'IOTECH',
    explanation1: 'A programming language specific for IoT devices.',
    explanation2: 'Implemented for Programming Languages course that got Agrade.',
    explanation3: '',
  },
];

function Projects() {
  return (
    <div>
      <div className='pageSeperator'>
        <h2>Work Experience</h2>
        <hr></hr>
      </div>
      <Row className='experiencesHolder'>
        <h1>Arçelik Global</h1>
        <Col>
          <p id="coursesP">In 2022, I did my summer internship as an R&D software developer at <a target="_blank" href='https://www.arcelikglobal.com/'>Arçelik Global</a>, the second biggest brand in Europe's overall white goods market.</p>
          <p id="coursesP">In my internship, I implemented an early warning system using <strong>Python</strong> that detects possible malfunctions in refrigerators before malfunctioning causes the food to rot. The technical service currently uses my project to detect malfunctions.</p>
        </Col>
        <Col className="col-md-2">
          <a target="_blank" href='https://www.arcelikglobal.com/'><img class='internship' src={arcelik} alt="internship company" /></a>
        </Col>
      </Row>
      <div>
        <h2>Projects</h2>
        <hr></hr>
      </div>


        <CarouselProvider className='projectsHolder'
          totalSlides={projects.length}
          naturalSlideWidth={60}
          naturalSlideHeight={10}
        >
          <Slider>
            {projects.map((project) => 
            <Slide index={project.id}><ProjectItem key = {project.id}
            name={project.name} explanation1={project.explanation1}
            explanation2={project.explanation2} explanation3={project.explanation3}></ProjectItem></Slide>
            )}
          </Slider>
          <ButtonBack>Back</ButtonBack>
          <ButtonNext>Next</ButtonNext>
        </CarouselProvider>
    </div>
  );
}
export default Projects;