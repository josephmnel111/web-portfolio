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
        <div className="NavigationBar">
            <div className = "left">
    
            </div>
            <div className = "right">
                <div className = "divLink" onClick = {handleHome}>Home</div>
                <div className = "divLink" onClick = {handleAbout}>About</div>
                <div className = "divLink" onClick = {handleProjects}>Projects</div>
            </div>
        </div>
    )
}
export default NavigationBar