import './individual-project.css'
import React from 'react'
import {useNavigate} from 'react-router-dom'


function IndividualProjects({project}) {

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(project.moreDetailsRoute)
    }

    return (
        <div className = "IndividualProjects">
            <div className = "right-project">
                <div className = "ProjectName">
                    {project.name}
                </div>
                <div className = "ProjectDescription">
                    <div className = "DescriptionHead">
                        Description
                    </div>
                    <div className = "DescriptionContent">
                        {project.description}
                    </div>
                </div>
                <div className = "ProjectTools"> 
                    <div className = "ToolsHead">
                        Tools
                    </div>
                    <div className = "ToolsContainer">
                        {
                            project.tools.map((tool, index) =>
                                <div key = {index} className = "Tool"> {tool}</div>
                            )
                        }
                    </div>
                </div>
                <div className = "ProjectButtons">
                    <div className = "ButtonHead">
                        More Options
                    </div>
                    <div className = "ButtonContainer">
                        { project.liveDemo !== "none" &&
                            <button 
                                onClick={() => {
                                    window.open(project.liveDemo)
                                }}
                            >
                                Demo
                            </button>
                        }
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
                            onClick = {handleNavigate}
                        >
                            Details
                        </button>
                    </div>
                    
                </div>
            </div>
            <div className = "left-project">
                <img className = {project.class_Name} src = {project.pictureLink} alt = ""/>
            </div>
            
        </div>
    )
}

export default IndividualProjects