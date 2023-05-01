import './App.css';
import './index.css'
import MobileNavigationBar from './Components/MobileNavigationBar/mobile-navigation-bar'
import NavigationBar from './Components/NavigationBar/navigation-bar';
import Home from './Components/Home/home'
import About from './Components/About/about'
import Projects from './Components/Projects/projects'
import React, {useRef} from 'react'

/*
  Todo:
    1. Create details pages for each project with example pictures.
    3. Create area that links to your resume, github, LinkedIn.
    4. Style all the areas and get good background, and include animations.
    5. Host your Jeopardy project and link it with another button.
*/

function App() {
  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const projectsRef = useRef(null)

  return (
    <div className="App">
      <MobileNavigationBar homeRef = {homeRef} aboutRef = {aboutRef} projectsRef = {projectsRef}></MobileNavigationBar>
      <NavigationBar homeRef = {homeRef} aboutRef = {aboutRef} projectsRef = {projectsRef}></NavigationBar>
      <Home ref = {homeRef}></Home>
      <About ref = {aboutRef}></About>
      <Projects ref = {projectsRef}></Projects>
    </div>
  );
}

export default App;
