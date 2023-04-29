import React from 'react'
import './jeopardy-game-details.css'
import DetailsNavigationBar from '../DetailsNavigationBar/details-navigation-bar'
import '../details.css'
import video1 from '../../ProjectVideos/countdown-2637.mp4'

function JeopardyDetails () {
    return (
        <div className = "DetailsContainer">
            <DetailsNavigationBar/>
            <div className = "DetailsTitle">
                Jeopardy Game Details
            </div>
            <div className = "Introduction">
                <div className = "IntroductionTitle">
                    Introduction
                </div>
                <div className = "IntroductionContent">
                &emsp;This was one of the first projects I created in my spare time. The original version
                used PHP to code the backend and recorded the leaderboard results in a database. Because I am hosting this project,
                I the live demo version, so it will not record the results. This way it does not require a login feature and is simpler
                to use.
                </div>
            </div>
            <div className = "Features">
                <div className = "FeaturesTitle">
                    Features
                </div>
                <div className = "FeaturesSection">
                    <div className = "FeaturesHeader">
                        API Functionality
                    </div>
                    <div className = "FeaturesContentSection">
                        <div className = "FeaturesBody">
                        &emsp;The program makes a fetch request to a Jeopardy API to return the questions,
                        answers, dollar amounts, and categories for the required Jeopardy question/answer pairs.
                        There are 5 categories with 6 pairs in each category that are retreived.
                        </div>
                        <div className = "FeaturesGraphic">
                            <video src = {video1} autoplay="true" height = "250vw" width = "500vw"></video>
                        </div>
                    </div>
                </div>
                <div className = "FeaturesSection">
                    <div className = "FeaturesHeader">
                        Game Handling
                    </div>
                    <div className = "FeaturesContentSection">
                        <div className = "FeaturesBody">
                        &emsp;When a user clicks on one of the dollar amounts in the table, they are asked a question and
                        can respond accordingly with their answer guess. The program checks the similarity between
                        the user's answer and the correct answer. If they are similar enough, the appropriate dollar
                        value is added onto the running total. Once the user has answered all 30 questions, their Functionality
                        score is displayed, and they are asked if they would like to exit or play again.
                        </div>
                        <div className = "FeaturesGraphic">
                            <video src = {video1} autoplay="true" height = "250vw" width = "500vw"></video>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JeopardyDetails;