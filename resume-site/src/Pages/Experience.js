import React, { useState, useEffect } from 'react';
import translations from "../Components/Translations";
import YoutubeEmbed from "../Components/YoutubeEmbed";

export default function Experience() {
    const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('selectedLanguage'));
    
    useEffect(() => {
      setSelectedLanguage(localStorage.getItem('selectedLanguage'));
    }, []);
    const translation = translations[selectedLanguage];

    const [openExp, setOpenExp] = useState('');

    function toggleExp(expId) {
        if (openExp === expId) {
            setOpenExp('');
        } else {
            setOpenExp(expId);
        }
    }

    const experienceData = [
        {
            title : translation.experience.exp1.title,
            exp : translation.experience.exp1.exp,
            image: ('../bilsem1.webp')
        },
        {
            title : translation.experience.exp2.title,
            exp : translation.experience.exp2.exp,
            video : ("t54nEiuiiOo")
        },
        {
            title : translation.experience.exp3.title,
            exp : translation.experience.exp3.exp,
            image: ('../certificate1.webp')
        },
        {
            title : translation.experience.exp4.title,
            exp : translation.experience.exp4.exp,
            link: "https://github.com/ardacey"
        }
      ];
      

    return (
        <div className='experience'>
            <div className='quote'>
                <h1 className = "image-text1">
                    {translation.lotrQuote.quote}
                    <p className="author">
                        {translation.lotrQuote.author}
                    </p>
                </h1> 
            </div>
            <div className='exp-text'>
                {experienceData.map((exp, index) => (
                    <div>
                        <div className='exp-container' key={`exp${index}`} onClick={() => toggleExp(`exp${index}`)}>
                            <p>
                            {exp.title}
                            </p>
                        </div>
                        <div className="exp-inner-container">
                            {exp.image && (
                                <img
                                    className='exp-image'
                                    src={exp.image}
                                    alt={exp.title}
                                    loading="lazy"
                                    style={{ display: openExp === `exp${index}` ? 'block' : 'none' }}
                                />
                            )}
                            <p id={`exp${index}`} style={{ display: openExp === `exp${index}` ? 'block' : 'none' }}>
                                {exp.exp}
                            </p>
                            </div>
                            <div style={{ display: openExp === `exp${index}` ? 'block' : 'none' }} className='embed'>
                                {exp.video && (<YoutubeEmbed embedId={exp.video}></YoutubeEmbed>)}
                            </div>
                            {exp.link && <a 
                            href={exp.link} 
                            style={{ display: openExp === `exp${index}` ? 'block' : 'none' }} 
                            className='exp-link'
                            rel="noopener noreferrer"
                            target="_blank"
                            >Github</a>}
                    </div>
                    ))}
            </div>
        </div>
    )
}