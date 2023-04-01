import 'details.css'
import React from 'react'

function FitnessAppDetails () {
    return (
        <div className = "FitnessAppDetailsPage">
            <div className = "Title">
                Fitness App Details
            </div>
            <div className = "Introduction">
                This is an app I am creating outside of school to help track various workout information. My plan is to eventually
                put it on the app store as my goal is to make it easier to use than other apps out there. I am building it using 
                React Native and am learning a lot along the way.
            </div>
            <div className = "Features">
                <div className = "FeatureHeader">
                    Workout Scheduler/Tracker
                </div>
                <div className = "FeatureBody">
                    This allows you to schedule your workouts in advanced. You will be able to view
                    all your runs and workouts planned for the month, and it will even provide an option
                    to alert you when it is time for the workout.
                </div>
                <div className = "FeatureHeader">
                    Running Scheduler/Tracker
                </div>
                <div className = "FeatureBody">
                    You will be able to easily track and schedule your runs. My goal is to allow you to schedule a 
                    specific run before hand using a map or allow you to track your run and schedule the same route 
                    for later.
                </div>
                <div className = "FeatureHeader">
                    Results Viewer
                </div>
                <div className = "FeatureBody">
                    This feature will allow you to view your progress including workout results, running times,
                    weight, and body fat % over a specific time interval.
                </div>
            </div>
        </div>
    )
}

export default FitnessAppDetails;