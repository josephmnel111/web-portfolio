import './navigation-bar.css'
import React from 'react'

function NavigationBar ({homeRef, aboutRef, projectsRef}) {

    function handleHome() {
        homeRef.current.scrollIntoView({behavior: "smooth"})
    }
    function handleAbout() {
        aboutRef.current.scrollIntoView({behavior: "smooth"})
    }
    function handleProjects() {
        projectsRef.current.scrollIntoView({behavior: "smooth"})
    }
    return (
        <div class="NavigationBar">
            <div class = "left">
    
            </div>
            <div class = "right">
                <div className = "divLink" onClick = {handleHome}>HOME</div>
                <div className = "divLink" onClick = {handleAbout}>ABOUT</div>
                <div className = "divLink" onClick = {handleProjects}>PROJECTS</div>
            </div>
        </div>
    )
}
export default NavigationBar