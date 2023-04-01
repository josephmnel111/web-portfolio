import './about.css'
import {forwardRef} from 'react'
import React from 'react'

const  About = forwardRef((props, ref) => {
    return (
        <div className = "About" ref = {ref}>
            I am pursuing my passion in software engineering and am looking for a role where I can 
            thrive. I am currently residing in Canton, MI, and I code personal projects and do freelancing
            on the side while I look for a new role.
        </div>
    )
})
export default About