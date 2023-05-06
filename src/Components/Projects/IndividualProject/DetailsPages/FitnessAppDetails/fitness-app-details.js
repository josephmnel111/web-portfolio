import React, {useRef, useEffect} from 'react'
import './fitness-app-details.css'
import '../details.css'
import ProfileVideo from '../../ProjectVideos/Fitness-App/Fitness-App-Profile.mp4'
import LiftingVideo from '../../ProjectVideos/Fitness-App/Fitness-App-Lifting.mp4'

function FitnessAppDetails () {

    const profileVideoRef = useRef(null)
    const liftingVideoRef = useRef(null)

    useEffect(() => {
        window.scrollTo(0, 0);
        let options = {
          rootMargin: "0px",
          threshold: [0.90, 1.00]
        };
            let handlePlayProfile = (entries, profileObserver) => {
                entries.forEach((entry) => {
                    if (profileVideoRef.current != null) { //If we haven't navigated away from video page
                        if (entry.isIntersecting) {
                            profileVideoRef.current.play();
                        } else {
                            profileVideoRef.current.pause();
                        }
                    }
              });
            }
            let profileObserver = new IntersectionObserver(handlePlayProfile, options);
            profileObserver.observe(profileVideoRef.current)
    
    
            let handlePlayLifting =(entries, liftingObserver) => {
                entries.forEach((entry) => {
                    if (liftingVideoRef.current != null) { //If we haven't navigated away from video page
                        if (entry.isIntersecting) {
                            liftingVideoRef.current.play();
                        } else {
                            liftingVideoRef.current.pause();
                        }
                    }
              });
            }
            let liftingObserver = new IntersectionObserver(handlePlayLifting, options);
            liftingObserver.observe(liftingVideoRef.current)
    });

    return (
        <div className = "DetailsContainer">
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
                            &emsp;This allows you to schedule your workouts in advance either singularly 
                            or in a group. You can also view and edit these workouts after they have been initially created.
                        </div>
                        <div className = "FeaturesGraphic">
                            <video className = "FitnessVideo" src = {LiftingVideo} ref = {liftingVideoRef} muted="muted" controls={true}></video>
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
                            <video className = "FitnessVideo" src = {ProfileVideo} ref = {profileVideoRef} muted="muted" controls={true}></video>
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
                            specific run before hand or allow you to track your run and schedule the same route 
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