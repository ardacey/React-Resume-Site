import React, { useState, useEffect } from 'react';
import translations from "../Components/Translations";

export default function Projects() {
    const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('selectedLanguage'));
    
    useEffect(() => {
      setSelectedLanguage(localStorage.getItem('selectedLanguage'));
    }, []);
    const translation = translations[selectedLanguage];

    return (
        <div>
            work in progress
        </div>
    )
}