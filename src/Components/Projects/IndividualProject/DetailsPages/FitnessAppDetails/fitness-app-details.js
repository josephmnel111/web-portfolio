import React from 'react'
import './fitness-app-details.css'
import DetailsNavigationBar from '../DetailsNavigationBar/details-navigation-bar'
import '../details.css'
import video1 from '../../ProjectVideos/countdown-2637.mp4'

function FitnessAppDetails () {
    return (
        <div className = "DetailsContainer">
            <DetailsNavigationBar/>
            <div className = "DetailsTitle">
                Fitness App Details
            </div>
            <div className = "Introduction">
                <div className = "IntroductionTitle">
                    Introduction
                </div>
                <div className = "IntroductionContent">
                &emsp;This is an app that allows you to track various workout information. My plan is to eventually
                put it on the app store once it has all the desired functionality. I am building it using 
                React Native with a NodeJS backend. Not all of the features have been fully implemented as it
                is still a work in progress.
                </div>
            </div>
            <div className = "Features">
                <div className = "FeaturesTitle">
                    Features
                </div>
                <div className = "FeaturesSection">
                    <div className = "FeaturesHeader">
                        Workout Scheduler/Tracker
                    </div>
                    <div className = "FeaturesContentSection">
                        <div className = "FeaturesBody">
                            &emsp;This allows you to schedule your workouts in advanced. It will allow you to schedule
                            workouts well into the future, so you can plan your progress. You can also view and 
                            edit these workouts after they have been created initiailly.
                        </div>
                        <div className = "FeaturesGraphic">
                            <video src = {video1} autoplay="true" height = "250vw" width = "500vw"></video>
                        </div>
                    </div>
                </div>
                <div className = "FeaturesSection">
                    <div className = "FeaturesHeader">
                        Results Viewer
                    </div>
                    <div className = "FeaturesContentSection">
                        <div className = "FeaturesBody">
                            &emsp;This feature will allow you to view your progress including workout results, running times,
                            weight, and body fat % over a specific time interval.
                        </div>
                        <div className = "FeaturesGraphic">
                            <video src = {video1} autoplay="true" height = "250vw" width = "500vw"></video>
                        </div>
                    </div>
                </div>
                <div className = "FeaturesSection">
                    <div className = "FeaturesHeader">
                        Running Scheduler/Tracker 
                    </div>
                    <div className = "FeaturesContentSection">
                        <div className = "FeaturesBody">
                            &emsp;You will be able to easily track and schedule your runs. My goal is to allow you to schedule a 
                            specific run before hand using a map or allow you to track your run and schedule the same route 
                            for later. It will also track other data such as speed, steps taken, and calories burned.
                        </div>
                        <div className = "FeaturesGraphic">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FitnessAppDetails;