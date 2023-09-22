import React, { useState, useEffect } from 'react';
import translations from "./Translations";
import { NavLink} from "react-router-dom";

export default function MainContent() {
    const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('selectedLanguage'));
    
    useEffect(() => {
      setSelectedLanguage(localStorage.getItem('selectedLanguage'));
    }, []);
    const translation = translations[selectedLanguage];

    return (
        <div className="content">
            <NavLink 
                to = "https://www.instagram.com/ardaceyy/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="navlink-social">
                  <img src='instagram.ico' className='social-media' alt="instagram icon"></img>
            </NavLink>
            <NavLink 
                to = "https://www.linkedin.com/in/arda-ceylan-911a82252/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="navlink-social">
                  <img src='linkedin.ico' className='social-media' alt="linkedin icon"></img>
            </NavLink>
            <NavLink 
                to = "https://github.com/ardacey" 
                target="_blank" 
                rel="noopener noreferrer"
                className="navlink-social">
                  <img src='github.ico' className='social-media' alt="github icon"></img>
            </NavLink>
            <div className= "firstContent">
                <img src="/profile.avif" alt="Arda Ceylan looking at you" className="profilePicture"></img>
                <h4 className="mainSpeech">
                    {translation.content.firstContent}
                </h4>
            </div>
            <div className= "secondContent">
                <h4 className='secondSpeech'>
                    {translation.content.secondContent}
                </h4>
                <img src="/profile2.avif" alt="Arda Ceylan looking at you" className="profilePicture2"></img>
            </div>
        </div>
    )
}