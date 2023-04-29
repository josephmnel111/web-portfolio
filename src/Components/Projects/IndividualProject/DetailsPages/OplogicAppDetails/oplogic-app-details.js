import React from 'react'
import './oplogic-app-details.css'
import DetailsNavigationBar from '../DetailsNavigationBar/details-navigation-bar'
import '../details.css'
import video1 from '../../ProjectVideos/countdown-2637.mp4'

function OplogicAppDetails () {
    return (
        <div className = "DetailsContainer">
            <DetailsNavigationBar/>
            <div className = "DetailsTitle">
                Oplogic App Details
            </div>
            <div className = "Introduction">
                <div className = "IntroductionTitle">
                    Introduction
                </div>
                <div className = "IntroductionContent">
                    This was a custom web messaging application that I helped build with a team from Oplogic and four
                    other students for a Senior Design project. The app is currently being used as a primary method of 
                    communication between the employees at Oplogic. I was primarily responsible for the communication between
                    the client and server, much of the backend, a couple of the modales, and the user tagging system. Because this
                    was a pretty extensive project that included so many features, I will only demonstrate some of the core ones in the
                    features section.
                </div>
            </div>
            <div className = "Features">
                <div className = "FeaturesTitle">
                    Features
                </div>
                <div className = "FeaturesSection">
                    <div className = "FeaturesHeader">
                        Creating Groups
                    </div>
                    <div className = "FeaturesContentSection">
                        <div className = "FeaturesBody">
                            This allows you to create a new group channel/private message with anyone else who has registered
                            an account with the app. Because the focus was creating an app for the employees which 
                            number in the tens and hundereds, not thousands and millions, we did not
                            have to worry about entering a person's unique id while inviting them to the group. Instead, 
                            we could display a list of the users and allow the user to directly search among all the
                            users who use the app using a search bar/sorting algorithm. This allows for a much quicker process 
                            than figuring out what their unique id is.
                        </div>
                        <div className = "FeaturesGraphic">
                            <video src = {video1} autoplay="true" height = "250vw" width = "500vw"></video>
                        </div>
                    </div>
                </div>
                <div className = "FeaturesSection">
                    <div className = "FeaturesHeader">
                        Private/Group Messaging
                    </div>
                    <div className = "FeaturesContentSection">
                        <div className = "FeaturesBody">
                            This feature is the major function of the program. It allows for communication
                            through private messaging and group channels. We also added a unique feature which
                            allows employees to reference the profiles of customers. This allows for easy communication
                            about clients because their information such as name, phone number, email, desired car, etc. 
                            could be accessed and communicated so easily. The program also allows for images and other files
                            files to be sent over the messaging system.
                        </div>
                        <div className = "FeaturesTwoGraphics">
                            <video src = {video1} autoplay="true" height = "250vw" width = "500vw"></video>
                            <video src = {video1} autoplay="true" height = "250vw" width = "500vw"></video>
                        </div>
                    </div>
                </div>
                <div className = "FeaturesSection">
                    <div className = "FeaturesHeader">
                        User Tagging/Notifications
                    </div>
                    <div className = "FeaturesContentSection">
                        <div className = "FeaturesBody">
                        The tagging and notificaton system works very similarly to how it works in Slack or Discord.
                        When a user is in a group or channel, they can type the @ symbol and a list of the users in
                        that channel is displayed. They can click the name they wanted to tag, or keep typing the name
                        to narrow down the list even more. When a user is selected and the message is sent, the user of
                        the tag is sent a nofication and a symbol over the channel where they are tagged appears and changes
                        based on the number of notifications.
                        </div>
                        <div className = "FeaturesTwoGraphics">
                            <video src = {video1} autoplay="true" height = "250vw" width = "500vw"></video>
                            <video src = {video1} autoplay="true" height = "250vw" width = "500vw"></video>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OplogicAppDetails;