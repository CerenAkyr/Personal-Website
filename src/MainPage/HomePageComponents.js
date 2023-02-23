import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./sakura.css";
import tree from '../images/sakura.png';
import './HomePageComponents.css';
import cvPhoto from '../images/cv-foto.png';


function Courses() {
    return (
        <div class="containerSakura">
            <div class="sakura"><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span>
            </div>
            <Row><Col>
                <img id="sakura" src={tree} alt="my photo" />
            </Col>
                <Col>
                    <Row className='pageSeperator'>
                    <Col>
                            <h1>About Me</h1>
                            <p>Hi! I am a computer science student at Bilkent University which is one of the top schools in Turkey. I will graduate in the spring of 2024.</p>
                            <p>Feel free to read more about my experiences and projects!</p>
                        </Col>
                        <Col xs={4}>
                            <img src={cvPhoto} alt="my photo" />
                        </Col>
                    </Row>
                    <Row className='pageSeperatorLess'>
                        <h1>My Skills</h1>
                    <Col className="col-md-4">
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Java</li>
                            <li>Python</li>
                        </ul>
                    </Col>
                    <Col>
                        <ul>
                            <li>C++</li>
                            <li>SQL</li>
                            <li>Dart/Flutter</li>
                            <li>PHP</li>
                            <li>MS Office, Open Office</li>
                        </ul>
                    </Col>
                </Row>
                <Row className='pageSeperatorLess'>
                    <h1>My Contact Information</h1>
                    <p>Email: ceren.akyar@ug.bilkent.edu.tr</p>
                    <p>GitHub: CerenAkyr</p>
                    <p>Linkedin: linkedin.com/in/ceren-akyar-a477911b7</p>
                </Row>
                </Col></Row>
            
        </div>
    );

}
export default Courses;