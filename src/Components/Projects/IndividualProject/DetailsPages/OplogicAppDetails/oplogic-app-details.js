import React, {useRef, useEffect} from 'react'
import './oplogic-app-details.css'
import '../details.css'
import CreatingVideo1 from '../../ProjectVideos/Oplogic/CreateGroup1.mp4'
import CreatingVideo2 from '../../ProjectVideos/Oplogic/CreateGroup2.mp4'
import MessagingVideo1 from '../../ProjectVideos/Oplogic/SendMessage1.mp4'
import MessagingVideo2 from '../../ProjectVideos/Oplogic/SendMessage2.mp4'
import TaggingVideo1 from '../../ProjectVideos/Oplogic/SendNotification1.mp4'
import TaggingVideo2 from '../../ProjectVideos/Oplogic/SendNotification2.mp4'

function OplogicAppDetails () {

    const creatingVideo1Ref = useRef(null)
    const creatingVideo2Ref = useRef(null)
    const messagingVideo1Ref = useRef(null)
    const messagingVideo2Ref = useRef(null)
    const taggingVideo1Ref = useRef(null)
    const taggingVideo2Ref = useRef(null)

    useEffect(() => {
        window.scrollTo(0, 0);
        let options = {
          rootMargin: "0px",
          threshold: [0.90, 1.00]
        };
            let handlePlayCreating1 = (entries, creating1Observer) => {
                entries.forEach((entry) => {
                    if (creatingVideo1Ref.current != null) { //If we haven't navigated away from video page
                        if (entry.isIntersecting) {
                            creatingVideo1Ref.current.play();
                        } else {
                            creatingVideo1Ref.current.pause();
                        }
                    }
              });
            }
            let creating1Observer = new IntersectionObserver(handlePlayCreating1, options);
            creating1Observer.observe(creatingVideo1Ref.current)
    
            let handlePlayCreating2 = (entries, creating2Observer) => {
                entries.forEach((entry) => {
                    if (creatingVideo2Ref.current != null) { //If we haven't navigated away from video page
                        if (entry.isIntersecting) {
                            creatingVideo2Ref.current.play();
                        } else {
                            creatingVideo2Ref.current.pause();
                        }
                    }
              });
            }
            let creating2Observer = new IntersectionObserver(handlePlayCreating2, options);
            creating2Observer.observe(creatingVideo2Ref.current)

            let handlePlayMessaging1 =(entries, messaging1Observer) => {
                entries.forEach((entry) => {
                    if (messagingVideo1Ref.current != null) { //If we haven't navigated away from video page
                        if (entry.isIntersecting) {
                            messagingVideo1Ref.current.play();
                        } else {
                            messagingVideo1Ref.current.pause();
                        }
                    }
              });
            }
            let messaging1Observer = new IntersectionObserver(handlePlayMessaging1, options);
            messaging1Observer.observe(messagingVideo1Ref.current)

            let handlePlayMessaging2 =(entries, messaging2Observer) => {
                entries.forEach((entry) => {
                    if (messagingVideo2Ref.current != null) { //If we haven't navigated away from video page
                        if (entry.isIntersecting) {
                            messagingVideo2Ref.current.play();
                        } else {
                            messagingVideo2Ref.current.pause();
                        }
                    }
              });
            }
            let messaging2Observer = new IntersectionObserver(handlePlayMessaging2, options);
            messaging2Observer.observe(messagingVideo2Ref.current)

            let handlePlayTagging1 =(entries, tagging1Observer) => {
                entries.forEach((entry) => {
                    if (taggingVideo1Ref.current != null) { //If we haven't navigated away from video page
                        if (entry.isIntersecting) {
                            taggingVideo1Ref.current.play();
                        } else {
                            taggingVideo1Ref.current.pause();
                        }
                    }
              });
            }
            let tagging1Observer = new IntersectionObserver(handlePlayTagging1, options);
            tagging1Observer.observe(taggingVideo1Ref.current)

            let handlePlayTagging2 =(entries, tagging2Observer) => {
                entries.forEach((entry) => {
                    if (taggingVideo2Ref.current != null) { //If we haven't navigated away from video page
                        if (entry.isIntersecting) {
                            taggingVideo2Ref.current.play();
                        } else {
                            taggingVideo2Ref.current.pause();
                        }
                    }
              });
            }
            let tagging2Observer = new IntersectionObserver(handlePlayTagging2, options);
            tagging2Observer.observe(taggingVideo2Ref.current)
    });

    return (
        <div className = "DetailsContainer">
            <div className = "DetailsTitle">
                Oplogic App Details
            </div>
            <div className = "Introduction">
                <div className = "IntroductionTitle">
                    Introduction
                </div>
                <div className = "IntroductionContent">
                    &emsp;This was a custom web messaging application that I helped build with a team from Oplogic and four
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
                            &emsp;This allows you to create a new group channel/private message with anyone else who has registered
                            an account with the app. Because the focus was creating an app for the employees which 
                            number in the tens and hundereds, not thousands and millions, we did not
                            have to worry about entering a person's unique id while inviting them to the group. Instead, 
                            we could display a list of the users and allow the user to directly search among all the
                            users who use the app using a search bar/sorting algorithm. This allows for a much quicker process 
                            than figuring out what their unique id is.
                        </div>
                        <div className = "FeaturesTwoGraphics">
                            <div className = "FirstSection">   
                                    <div className = "SectionTitle">
                                        User 1
                                    </div>
                                    <video className = "TwoOplogicVideo" src = {CreatingVideo1} ref = {creatingVideo1Ref} muted="muted" controls={true}></video>
                            </div>
                            <div className = "SecondSection">
                                <div className = "SectionTitle">
                                    User 2
                                </div>
                                <video className = "TwoOplogicVideo" src = {CreatingVideo2} ref = {creatingVideo2Ref} muted="muted" controls={true}></video>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "FeaturesSection">
                    <div className = "FeaturesHeader">
                        Private/Group Messaging
                    </div>
                    <div className = "FeaturesContentSection">
                        <div className = "FeaturesBody">
                            &emsp;This feature is the major function of the program. It allows for communication
                            through private messaging and group channels. We also added a unique feature which
                            allows employees to reference the profiles of customers. This allows for easy communication
                            about clients because their information such as name, phone number, email, desired car, etc. 
                            could be accessed and communicated so easily. The program also allows for images and other files
                            files to be sent over the messaging system.
                        </div>
                        <div className = "FeaturesTwoGraphics">
                            <div className = "FirstSection">   
                                    <div className = "SectionTitle">
                                        User 1
                                    </div>
                                    <video className = "TwoOplogicVideo" src = {MessagingVideo1} ref = {messagingVideo1Ref} muted="muted" controls={true}></video>
                            </div>
                            <div className = "SecondSection">
                                <div className = "SectionTitle">
                                    User 2
                                </div>
                                <video className = "TwoOplogicVideo" src = {MessagingVideo2} ref = {messagingVideo2Ref} muted="muted" controls={true}></video>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "FeaturesSection">
                    <div className = "FeaturesHeader">
                        User Tagging/Notifications and Message Editing/Deleting
                    </div>
                    <div className = "FeaturesContentSection">
                        <div className = "FeaturesBody">
                        &emsp;The tagging and notificaton system works very similarly to how it works in Slack or Discord.
                        When a user is in a group or channel, they can type the @ symbol and a list of the users in
                        that channel is displayed. They can click the name they wanted to tag, or keep typing the name
                        to narrow down the list even more. When a user is selected and the message is sent, the user of
                        the tag is sent a nofication and a symbol over the channel where they are tagged appears and changes
                        based on the number of notifications. A user can also edit and delete a message that only they have sent.
                        Channel administrators can also delete any message that was sent in the channel where they are an administrator.
                        </div>
                        <div className = "FeaturesTwoGraphics">
                            <div className = "FirstSection">   
                                <div className = "SectionTitle">
                                    User 1
                                </div>
                                <video className = "TwoOplogicVideo" src = {TaggingVideo1} ref = {taggingVideo1Ref} muted="muted" controls={true}></video>
                            </div>
                            <div className = "SecondSection">
                                <div className = "SectionTitle">
                                    User 2
                                </div>
                                <video className = "TwoOplogicVideo" src = {TaggingVideo2} ref = {taggingVideo2Ref} muted="muted" controls={true}></video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OplogicAppDetails;