import React, { useState, useEffect } from 'react';
import translations from "../Components/Translations";

export default function Contact() {
    const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('selectedLanguage'));
    
    useEffect(() => {
      setSelectedLanguage(localStorage.getItem('selectedLanguage'));
    }, []);
    const translation = translations[selectedLanguage];
    
    return (
        <div className="contact">
            <img src="contact-img.avif" className='contact-img' alt="Arda Ceylan at the waterfall"></img>
            <form name='contact' className='contact-form' method="POST">
                <input type="hidden" name="form-name" value="contact" />
                <h1>{translation.contact.contactme}</h1>
                <div className="form-row">
                    <input 
                    className="form-input" 
                    type="text" 
                    name="name" 
                    placeholder={translation.contact.name}
                    required></input>
                </div>
                <div className="form-row">
                    <input 
                    className="form-input" 
                    type="email" 
                    name="email"  
                    placeholder={translation.contact.email} 
                    required></input>
                </div>
                <div className="form-row">
                    <textarea 
                    className="form-input message" 
                    name="message" 
                    placeholder={translation.contact.message}
                    required></textarea>
                </div>
                <button className="submit" type="submit">{translation.contact.submit}</button>
            </form>
        </div>
    )
}