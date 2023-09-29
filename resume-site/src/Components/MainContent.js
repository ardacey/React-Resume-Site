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
            <img
                src="resume.ico"
                className="navlink-social"
                alt='resume icon'
                style={{ cursor: 'pointer' }}
                onClick={() => window.open("resume.pdf", '_blank')}>
            </img>
            <div className= "firstContent">
                <img src="/profile.webp" alt="Arda Ceylan looking at you" className="profilePicture"></img>
                <p className="mainSpeech">
                    {translation.content.firstContent}
                </p>
            </div>
            <div className= "secondContent">
                <p className='secondSpeech'>
                    {translation.content.secondContent}
                </p>
                <img src="/profile2.webp" alt="Arda Ceylan looking at you" className="profilePicture2"></img>
            </div>
        </div>
    )
}