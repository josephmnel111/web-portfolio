import './individual-project.css'
import React from 'react'
import {useNavigate} from 'react-router-dom'


function IndividualProjects({project}) {

    const navigate = useNavigate();

    return (
        <div className = "IndividualProjects">
            <div className = "left-project">
                <img className = "ProjectImage" src = {project.pictureLink}/>
            </div>
            <div className = "right-project">
                <div className = "ProjectName">
                    {project.name}
                </div>
                <div className = "ProjectDescription">
                    <div className = "DescriptionHead">
                        Description
                    </div>
                    {project.description}
                </div>
                <div className = "ProjectTools"> 
                    <div className = "ToolsHead">
                        Tools
                    </div>
                    <div className = "ToolsContainer">
                        {
                            project.tools.map((tool) =>
                                <div className = "Tool"> {tool}</div>
                            )
                        }
                    </div>
                </div>
                <div className = "ProjectButtons">
                    <div className = "ButtonHead">
                        More Options
                    </div>
                    <div className = "ButtonContainer">
                        <button 
                            className = "Github" 
                            onClick={(e) => {
                                e.preventDefault();
                                window.open(project.githubLink);
                            }}>
                        Github
                        </button>
                        <button 
                            className = "Details"
                            onClick = {() => navigate(project.moreDetailsRoute)}
                        >
                            Details
                        </button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default IndividualProjects