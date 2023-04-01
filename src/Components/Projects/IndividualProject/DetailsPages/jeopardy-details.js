import 'details.css'
import React from 'react'

function JeopardyDetails () {
    return (
    <div className = "JeopardyDetailsPage">
        <div className = "Title">
            Jeopardy Game Details
        </div>
        <div className = "Introduction">
            This was one of the first projects I created in my spare time. The original version
            used PHP for a backend and recorded the results in a database. Because I am hosting this project,
            I changed it so it will not record the results, so I do not have to worry about managing names.
        </div>
        <div className = "Features">
                <div className = "FeatureHeader">
                    Workout Scheduler/Tracker
                </div>
                <div className = "FeatureBody">
                    
                </div>
        </div>
    </div>
    )
}

export default JeopardyDetails;