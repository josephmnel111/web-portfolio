import './mobile-navigation-bar.css'
import React, {useState} from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";



function MobileNavigationBar ({homeRef, aboutRef, projectsRef}) {

    const [showSidebar, setShowSidebar] = useState(false);

    function  displaySidebar() {
        setShowSidebar(true)
    }
    function hideSidebar() {
        setShowSidebar(false)
    }

    function handleHome() {
        hideSidebar()
        homeRef.current.scrollIntoView({behavior: "smooth"})
    }
    function handleAbout() {
        hideSidebar()
        aboutRef.current.scrollIntoView({behavior: "smooth"})
    }
    function handleProjects() {
        hideSidebar()
        projectsRef.current.scrollIntoView({behavior: "smooth"})
    }
    return (

        <div className="MobileNavigationBar">
            <div className = "MobileNavigationContent">
                {showSidebar === false &&
                    <AiOutlineMenu size = {30} className = "MenuIcon" onClick = {() => displaySidebar()}/>
                }
                    <div className = "SidebarContainer" style = {{right: showSidebar ? '0' : '-150px' }}>
                        <div className = "CloseButton">
                            <AiOutlineClose className = "CloseButtonIcon" size = {20} onClick = {() => hideSidebar()}></AiOutlineClose>
                        </div>
                        <div className = "SidebarHeader">
                            Navigation
                        </div>
                        <div className = "SidebarLabel" onClick = {() => handleHome()}>
                            Home
                        </div>
                        <div className = "SidebarLabel" onClick = {() => handleAbout()}>
                            About
                        </div>
                        <div className = "SidebarLabel" onClick = {() => handleProjects()}>
                            Projects
                        </div>
                    </div>
                
            </div>
        </div>
    )
}
export default MobileNavigationBar