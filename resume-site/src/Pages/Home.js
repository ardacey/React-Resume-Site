import MainContent from '../Components/MainContent';
import React, { useState, useEffect } from 'react';
import translations from "../Components/Translations";

export default function Home() {
    const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('selectedLanguage'));
      
    useEffect(() => {
      setSelectedLanguage(localStorage.getItem('selectedLanguage'));
    }, []);
    const translation = translations[selectedLanguage];

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 99) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
        <div className='container'>
            <img src='/down.png' className={`down ${scrolled ? 'scrolled' : ''}`} alt='down arrow'></img>
            <div className='quote'>
                <h1 className = "image-text1">
                    {translation.duneQuote.quote1}
                </h1> 
                <div className = "image-text2">
                    <p>
                    {translation.duneQuote.quote2}
                    </p>
                    <p className="author">
                    {translation.duneQuote.author}
                    </p>
                </div>
            </div>
            <MainContent />
        </div>
    )
}