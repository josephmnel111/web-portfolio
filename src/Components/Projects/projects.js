import './projects.css'
import IndividualProject from './IndividualProject/individual-project'
import JeopardyImage from './IndividualProject/ProjectImages/jeopardy_game_display.PNG'
import OplogicAppImage from './IndividualProject/ProjectImages/oplogic_project_display.PNG'
import React from 'react'
import {forwardRef} from 'react'





const projectDetails = [
    {
        id: 0,
        name: "Oplogic Web App",
        description: "This application was created as a custom messaging tool for the software company Oplogic's employees. It is similar to Slack or Discord, and it is still being used by them today.",
        tools: ["Angular", "NodeJS", "MySQL"],
        githubLink: "https://github.com/josephmnel111/oplogic_project",
        pictureLink: OplogicAppImage,
        moreDetailsRoute: "oplogic-app-details"
    },
    {
        id: 1,
        name: "Fitness Mobile App",
        description: "This app will allow you to track workouts and runs. It helps you view your progress over time, and enables you to better prepare your future workouts.",
        tools: ["React Native", "NodeJS", "MySQL"],
        githubLink: "https://github.com/josephmnel111/Fitness-App",
        pictureLink: OplogicAppImage,
        moreDetailsRoute: "fitness-app-details"
    },
    {
        id: 2,
        name: "Jeopardy Game",
        description: "This game will allow you to play Jeopardy on your own. The questions are taken from a database of previously asked questions.",
        tools: ["Javascript", "PHP"],
        githubLink: "https://github.com/josephmnel111/JeopardyGame",
        pictureLink: JeopardyImage,
        moreDetailsRoute: "jeopardy-game-details"
    }
]

const Projects = forwardRef((props, ref) => {
    return (
        <div className = "Projects" ref = {ref}>
            <div className = "ProjectsTitle">
                Projects
            </div>
            <div className = "PersonalProjects">
                {
                    projectDetails.map((project) => 
                        <IndividualProject key = {project.id} project = {project}></IndividualProject>
                    )
                }
            </div>
        </div>
    )
})
export default Projects