import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './HomePageComponents.css';
import CourseItem from './CourseItem';

const courses = [
    {
      id: 1,
      name: 'CS342-Operating Systems',
      explanation: 'Introduction to Computer and Operating Systems; Processes; Threads; Interprocess Communication; Process Scheduling; Process Synchronization; Deadlocks; Memory Management and Virtual Memory; File Systems: Interface and Implementation; Mass-Storage Structure and Management; Input/Output Systems; Examples from Operating Systems such as Linux and Windows.',
    },
    {
        id: 2,
        name: 'CS353-Database Systems',
        explanation: 'Understand the concepts underlying the design and implementation of database systems. Establish a solid background in data management, with a focus on relational database management systems. Practice actual database design, implementation, and query formulation through a term project.',
      },
      {
        id: 3,
        name: 'EEE391-Basics of Signals and Systems',
        explanation: 'The subject matter of this course is central to the mathematical analysis of linear systems arising in many areas of science and engineering. This provides a foundation for the analysis and processing of various kinds of media and information that are pervasive in modern society.',
      },
      {
        id: 4,
        name: 'CS315-Programming Languages',
        explanation: 'Language evaluation criteria. Describing syntax and semantics. Tools for constructing lexical and syntactical analyzers. Names, bindings, type checking, and scopes. Data types. Expressions and the assignment statement. Statement-level control structures. Subprograms. Abstract data types. Concurrency. Exception handling. Functional programming languages. Logic programming languages.',
      },
      {
        id: 5,
        name: 'CS319-Object-Oriented Software Engineering',
        explanation: 'Principles and stages of object-oriented software development. Overview of object-oriented software modeling with Unified Modeling Language and exposure to CASE tools for object-oriented development. Experience with such tools and environments through programming assignments and/or a term project.',
      },
      {
        id: 6,
        name: 'ENG401-Technical Report Writing and Presentation',
        explanation: 'The object of this course is to assist engineering students in effectively presenting various types of information in both the written and oral modes. Students will be expected to become competent in writing and organizing technical reports and in effectively presenting academic and technical papers.',
      },
      {
        id: 7,
        name: 'CS223 & CS224 - Computer Organization and Digital Design',
        explanation: 'An introductory course in digital design, covering combinational and sequential circuits, memory and logic arrays and introduction to processor architecture, with a weekly lab. The SystemVerilog hardware description language is used throughout the semester to model and implement digital designs.',
      },
      {
        id: 8,
        name: 'CS202-Fundamental Structures of Computer Science II',
        explanation: 'The course picks up from where CS 201 left by discussing concepts related to algorithmic efficiency on basic abstract data types and some sorting algorithms that utilize recursion. Then, the course introduces the abstract data types of trees, tables, priority queues, and graphs, and shows how one can implement them in C++ using fundamental data structures by emphasizing run-time complexity analysis.',
      },
      {
        id: 9,
        name: 'CS201-Fundamental Structures of Computer Science I',
        explanation: 'This course introduces the abstract data types of lists, stacks and queues, and shows how one can implement them in C++ using fundamental data structures. It also introduces recursion and algorithm analysis.',
      },
  ];

function Courses() {
    return (
        <div className='itemHolder'>
            {courses.map((course) => 
                <CourseItem
                    key = {course.id}
                    name = {course.name}
                    explanation = {course.explanation}
                />
            )}
            </div>
    );

}
export default Courses;