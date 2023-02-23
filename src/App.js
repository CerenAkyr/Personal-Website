import './App.css';
import PageMenu from './MainPage/PageMenu';
import "bootstrap/dist/css/bootstrap.min.css";
import HomePageComponents from './MainPage/HomePageComponents';
import {
  BrowserRouter as Router, Routes,
  Route, Navigate,
} from "react-router-dom";
import Project from './MainPage/Project';
import Courses from './MainPage/Courses';

function App() {


  return (
    <Router>
      <PageMenu />
      <div>
                    <Routes>
                    <Route path="/" element={<Navigate replace to="/home" />} />
                    <Route path='/home' element={<HomePageComponents/>} />
                    <Route path='/projects' element={<Project/>} />
                    <Route path='/courses' element={<Courses/>} />
                    </Routes>
                </div>
    </Router>
  );
}

export default App;
