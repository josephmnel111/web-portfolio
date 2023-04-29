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
            <div class = "AboutContent">
                <div className = "AboutSummary">
                    <p>
                        &emsp;I am looking to pursue my passion in software engineering and am looking for a company where I can 
                        help them meet their goals. I graduated with a degree in Computer and Information Science from U of M -
                        Dearborn. I am currently living in Canton, MI, and I code personal projects and do freelancing
                        on the side while I look for a new role. I enjoy problem solving and finding the most efficient
                        solutions for various problems. I have a completed a lot of projects in web development, but I am
                        also comfortable in C++, Java, Python, and a couple of other languages.
                    </p>
                </div>
                <div className = "AboutImage">
                    <img className = "ImageValue" src = {AboutImage}/>
                </div>
            </div>
            
        </div>
    )
})
export default About