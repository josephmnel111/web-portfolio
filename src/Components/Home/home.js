import './home.css'
import {forwardRef} from 'react'
import {SocialIcon} from 'react-social-icons'
import {FiFileText} from 'react-icons/fi';
import React from 'react'

const  Home = forwardRef((props, ref) => {
    return (
        <div className = "Home" ref = {ref}>
          <div className = "ContentContainer">
            <div className = "BoxContainer">
              <div className = "Name">
                Joseph Nelson
                <div className = "Title"> 
                  Software Engineer
                </div>
              </div>
            </div>
            <div className = "IconLinks">
              <SocialIcon className = "LinkedInIcon" url = "https://www.linkedin.com/in/joseph-nelson-240388246/" size = {56} bgColor="black" onMouseOver={({target})=>target.style.bgColor="white"}></SocialIcon>
              <SocialIcon className = "GithubIcon" url = "https://github.com/josephmnel111/" size = {56}></SocialIcon>
              <FiFileText className = "ResumeIcon" size = {52}/>
            </div>
          </div>
        </div>
    )
})

export default Home;