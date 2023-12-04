import React, {useRef, useEffect} from 'react'
import './jeopardy-game-details.css'
import '../details.css'
import APIVideo from '../../ProjectVideos/Jeopardy-Game/Api-Video.mp4'
import QuestionVideo from '../../ProjectVideos/Jeopardy-Game/Jeopardy_Question_Clip.mp4'

function JeopardyDetails () {

    const apiVideoRef = useRef(null)
    const questionVideoRef = useRef(null)

    useEffect(() => {
        window.scrollTo(0, 0);
        let options = {
          rootMargin: "0px",
          threshold: [0.90, 1.00]
        };
            let handlePlayQuestion = (entries, questionObserver) => {
                entries.forEach((entry) => {
                    if (questionVideoRef.current != null) { //If we haven't navigated away from video page
                        if (entry.isIntersecting) {
                            questionVideoRef.current.play();
                        } else {
                            questionVideoRef.current.pause();
                        }
                    }
              });
            }
            let questionObserver = new IntersectionObserver(handlePlayQuestion, options);
            questionObserver.observe(questionVideoRef.current)
    
    
            let handlePlayAPI =(entries, apiObserver) => {
                entries.forEach((entry) => {
                    if (apiVideoRef.current != null) { //If we haven't navigated away from video page
                        if (entry.isIntersecting) {
                            apiVideoRef.current.play();
                        } else {
                            apiVideoRef.current.pause();
                        }
                    }
              });
            }
            let apiObserver = new IntersectionObserver(handlePlayAPI, options);
            apiObserver.observe(apiVideoRef.current)
    });


    return (
        <div className = "DetailsContainer">
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
                I changed the live demo version, so it will not record the results. This way it does not require a login feature and is simpler
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
                            <video className = "JeopardyVideo" src = {APIVideo} autoFocus={false} ref = {apiVideoRef} muted="muted" controls={true} height = "240px" width = "380px"></video>
                        </div>
                        <div className = "VideoEnd">

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
                        the user's answer and the correct answer. The check disregards spaces, capitalization, and punctuation.
                        If the answer is correct, the appropriate dollar value is added onto the running total. Once the user has 
                        answered all 30 questions, their score is displayed, and they are asked if they would like to exit or play again.
                        </div>
                        <div className = "FeaturesGraphic" >
                            <video className = "JeopardyVideo" src = {QuestionVideo} ref = {questionVideoRef} muted="muted" controls={true}></video>
                        </div>
                        <div className = "VideoEnd">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JeopardyDetails;