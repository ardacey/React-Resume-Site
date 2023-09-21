import React, { useState, useEffect } from 'react';
import translations from "../Components/Translations";

export default function Education() {
    const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('selectedLanguage'));
    
    useEffect(() => {
      setSelectedLanguage(localStorage.getItem('selectedLanguage'));
    }, []);
    const translation = translations[selectedLanguage];

    return (
        <div className="education">
            <div className='quote'>
                <h1 className = "image-text1">
                    {translation.windQuote.quote1}
                </h1> 
                <div className = "image-text2">
                    <p>
                    {translation.windQuote.quote2}
                    </p>
                    <p className="author">
                    {translation.windQuote.author}
                    </p>
                </div>
            </div>
            <div className='school1'>
                <p>{translation.education.school1.name}</p>
                <p>{translation.education.school1.gpa}</p>
                <p>{translation.education.school1.year}</p>
                <img
                src='/school1.jpg'
                alt='Başkent High School'
                className='school1-img'
                ></img>
            </div>
            <div className='school2'>
                <img
                src='/school2.jpg'
                alt='Hacettepe University'
                className='school2-img'
                ></img>
                <p>{translation.education.school2.name}</p>
                <p>{translation.education.school2.depart}</p>
                <p>{translation.education.school2.gpa}</p>
                <p>{translation.education.school2.year}</p>
            </div>
        </div>
    )
}