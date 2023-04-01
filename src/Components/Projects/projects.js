import './projects.css'
import IndividualProject from './IndividualProject/individual-project'
import JeopardyImage from './IndividualProject/ProjectImages/JeopardyProject.jpg'
import OplogicAppImage from './IndividualProject/ProjectImages/OplogicProject.PNG'
import React from 'react'
import {forwardRef} from 'react'





const projectDetails = [
    {
        id: 0,
        name: "Oplogic Web App",
        description: "This application was created as a custom messaging tool for the software company Oplogic's employees. It is similar to Slack or Discord, and it is still being used by them today.",
        tools: ["Angular", "HTML", "CSS", "TypeScript", "NodeJS", "Socket.io", "MySQL"],
        githubLink: "https://github.com/josephmnel111/oplogic_project",
        pictureLink: OplogicAppImage,
        moreDetailsRoute: "None"
    },
    {
        id: 1,
        name: "Fitness App (In Progress...)",
        description: "This app that I am building will help track workouts and runs. It will ultimately allow you to see your progress over time to better plan your exercise regiments.",
        tools: ["React Native", "CSS", "Javascript", "NodeJS", "MySQL"],
        githubLink: "https://github.com/josephmnel111/Fitness-App",
        pictureLink: "None",
        moreDetailsRoute: "None"
    },
    {
        id: 2,
        name: "Jeopardy Game",
        description: "This game will allow you to play Jeopardy on your own. The questions are taken from a database of previously asked questions.",
        tools: ["HTML", "CSS", "Javascript", "JQuery", "PHP"],
        githubLink: "https://github.com/josephmnel111/JeopardyGame",
        pictureLink: JeopardyImage,
        moreDetailsRoute: "None"
    }
]

const Projects = forwardRef((props, ref) => {
    return (
        <div className = "Projects" ref = {ref}>
            Projects
            {
                projectDetails.map((project) => 
                    <IndividualProject key = {project.id} project = {project}></IndividualProject>
                )
            }
        </div>
    )
})
export default Projects