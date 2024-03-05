import React, { useState, useEffect } from 'react';
import translations from "../Components/Translations";
import { NavLink} from "react-router-dom";

export default function Projects() {
    const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('selectedLanguage'));
    
    useEffect(() => {
      setSelectedLanguage(localStorage.getItem('selectedLanguage'));
    }, []);
    const translation = translations[selectedLanguage];

    return (
        <div className='projects'>
            <div className='project-content'>
                <img
                className='gif1'
                src='blockfall.gif' >
                </img>
                <p className='project-title1'>
                    {translation.projects.blockfall.title}
                </p>
                <ul className='project-text1'>
                    <li>{translation.projects.blockfall.tech}</li>
                    <li>{translation.projects.blockfall.desc}</li>
                    <li>{translation.projects.blockfall.link}
                    <NavLink 
                        to = "https://github.com/ardacey/BlockFall-Tetris" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{color: 'aliceblue'}}>
                        {translation.projects.blockfall.title}
                    </NavLink>
                    </li>
                </ul>
            </div>
            <div className='project-content'>
                <img 
                className='gif2'
                src='duckhunt.gif' >
                </img>
                <p className='project-title2'>
                    {translation.projects.duckhunt.title}
                </p>
                <ul className='project-text2'>
                    <li>{translation.projects.duckhunt.tech}</li>
                    <li>{translation.projects.duckhunt.desc}</li>
                    <li>{translation.projects.duckhunt.link}
                    <NavLink 
                        to = "https://github.com/ardacey/Java-Duck-Hunt" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{color: 'aliceblue'}}>
                        {translation.projects.duckhunt.title}
                    </NavLink>
                    </li>
                </ul>
            </div>
            <div className='project-content'>
                <img 
                className='gif1'
                src='knn.webp' >
                </img>
                <p className='project-title1'>
                    {translation.projects.knn.title}
                </p>
                <ul className='project-text1'>
                    <li>{translation.projects.knn.tech}</li>
                    <li>{translation.projects.knn.desc}</li>
                    <li>{translation.projects.knn.link}
                    <NavLink 
                        to = "https://github.com/ardacey/Personality-Classification-With-KNN-Algorithm" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{color: 'aliceblue'}}>
                        {translation.projects.knn.title}
                    </NavLink>
                    </li>
                </ul>
            </div>
            <div className='project-content'>
                <img 
                className='gif2'
                src='weather.webp' >
                </img>
                <p className='project-title2'>
                    {translation.projects.weather.title}
                </p>
                <ul className='project-text2'>
                    <li>{translation.projects.weather.tech}</li>
                    <li>{translation.projects.weather.desc}</li>
                    <li>{translation.projects.weather.link}
                    <NavLink 
                        to = "https://hacettepe-weather.vercel.app/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{color: 'aliceblue'}}>
                        {translation.projects.weather.title}
                    </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}