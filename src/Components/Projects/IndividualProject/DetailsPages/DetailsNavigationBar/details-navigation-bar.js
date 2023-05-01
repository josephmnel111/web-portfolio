import './details-navigation-bar.css'
import React from 'react'
import {useNavigate} from 'react-router-dom'
import {AiOutlineLeft} from "react-icons/ai";


function NavigationBar () {

    const navigate = useNavigate();

    return (
        <div 
            className="DetailsNavigationBar" 
        >
            <AiOutlineLeft className = "LeftCarat" size = {24}onClick = {() => navigate('/web-portfolio')}></AiOutlineLeft>
        </div>
    )
}
export default NavigationBar