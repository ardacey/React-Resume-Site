import React, { useState, useEffect } from 'react';
import translations from "../Components/Translations";

export default function About() {
    const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('selectedLanguage'));
    
    useEffect(() => {
      setSelectedLanguage(localStorage.getItem('selectedLanguage'));
    }, []);
    const translation = translations[selectedLanguage];

    return (
        <div className='aboutPage'>
            <img 
            src='/about-photo.avif'
            alt='Arda Ceylan looking at you' 
            className='about-photo'
            ></img>
            <p className='about-me'>
                {translation.about.about1}
            </p>
            <p className='about-me2'>
                {translation.about.about2}
            </p>
            <ul className='about-list'>
                <li>{translation.about.about3}</li>
                <li>{translation.about.about4}</li>
                <li>{translation.about.about5}</li>
                <li>{translation.about.about6}</li>
            </ul>
        </div>
    )
}