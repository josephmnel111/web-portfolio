import './about.css'
import {forwardRef} from 'react'
import React from 'react'
import AboutImage from '../Projects/IndividualProject/ProjectImages/laptop.png'

const  About = forwardRef((props, ref) => {

    return (
        <div className = "About" ref = {ref}>
            <div className = "AboutTitle">
                About
            </div>
            <div className = "AboutContent">
                <div className = "AboutSummary">
                    <p>
                        &emsp; I am looking for a company where I can use my skills as a software dveloper to help them meet their goals. I graduated with a degree in Computer and Information Science from U of M - Dearborn. I code personal projects and do freelancing on the side while I look for a new role. I worked at Traction Consulting Group as a software engineering intern and am looking for the next step in my career. I enjoy problem solving and finding the most efficient solutions. I have completed a lot of projects in web development, and I am also comfortable in C++, Java, Python, and various other languages.
                    </p>
                </div>
                <div className = "AboutImage">
                    <img className = "ImageValue" src = {AboutImage} alt = ""/>
                </div>
            </div>
            
        </div>
    )
})
export default About