import React, { useState, useEffect } from 'react';
import translations from "./Translations";

export default function Footer() {
    const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('selectedLanguage'));
    
    useEffect(() => {
      setSelectedLanguage(localStorage.getItem('selectedLanguage'));
    }, []);
    const translation = translations[selectedLanguage];

    return (
        <div className="Footer">
            <p>{translation.footer.written}</p>
            <p>{translation.footer.made}</p>
        </div>
    )
}