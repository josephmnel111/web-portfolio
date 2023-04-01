import './individual-project.css'
import JeopardyImage from './ProjectImages/JeopardyProject.jpg'
import React from 'react'

function IndividualProjects({project}) {
    return (
        <div className = "IndividualProjects">
            <div class = "left-project">
                <img src = {project.pictureLink}/>
            </div>
            <div class = "right-project">
                <div className = "ProjectName">
                    {project.name}
                </div>
                
                <div className = "ProjectDescription">
                    Description: {project.description}
                </div>
                <div className = "ProjectTools">
                    Tools: 
                    {
                        project.tools.map((tool) =>
                            <div className = "Tool"> {tool} </div>
                        )
                    }
                </div>
                <button 
                    class = "Github" 
                    onClick={(e) => {
                        e.preventDefault();
                        window.open(project.githubLink);
                    }}>
                Github</button>
                <button class = "Details">Details</button>
            </div>
        </div>
    )
}

export default IndividualProjects