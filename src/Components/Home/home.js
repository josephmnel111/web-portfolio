import './home.css'
import React, {forwardRef} from 'react'
import { FaRegFileAlt } from 'react-icons/fa';
import { SiLinkedin, SiGithub } from "react-icons/si";
import PDF from './Resume.pdf'


const  Home = forwardRef((props, ref) => {

  const openResume = () => {
    window.open(PDF);
  }

    return (
        <div className = "Home" ref = {ref}>
          <div className = "ContentContainer">
            <div className = "Name">
              Joseph Nelson
            </div>
            <div className = "Title"> 
              Software Developer
            </div>
            <div className = "IconLinks">
              <div className = "Icon">
                <SiGithub size = {40}  onClick={() => {
                  window.open(
                    'https://github.com/josephmnel111',
                    '_blank' 
                  );
                }}/>
              </div>
              <div className = "Icon">
                <SiLinkedin size = {40} onClick={() => {
                  window.open(
                    'https://www.linkedin.com/in/joseph-nelson-240388246/',
                    '_blank' 
                  );
                }}/>
              </div>
              <div className = "Icon">
                <FaRegFileAlt size = {40}onClick={() => {
                  openResume()
                }}/>
              </div>
            </div>
          </div>
        </div>
    )
})

export default Home;