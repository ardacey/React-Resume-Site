import React, { useState, useEffect } from 'react';
import translations from "../Components/Translations";

export default function Contact() {
    const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('selectedLanguage'));
    const [emailData, setEmailData] = useState({
        name: '',
        email: '',
        message: '',
      });
    
    useEffect(() => {
      setSelectedLanguage(localStorage.getItem('selectedLanguage'));
    }, []);
    const translation = translations[selectedLanguage];

    const handleChange = (e) => {
        setEmailData({ ...emailData, [e.target.name]: e.target.value });
      };
    
    return (
        <div className="contact">
            <img src="contact-img.jpg" className='contact-img' alt="Arda Ceylan at the waterfall"></img>
            <form className='contact-form' method="POST" data-netlify="true" netlify>
                <h1>{translation.contact.contactme}</h1>
                <div className="form-row">
                    <input 
                    className="form-input" 
                    type="text" 
                    name="name" 
                    value={emailData.name} 
                    placeholder={translation.contact.name}
                    onChange={handleChange}
                    required></input>
                </div>
                <div className="form-row">
                    <input 
                    className="form-input" 
                    type="email" 
                    name="email" 
                    value={emailData.email} 
                    placeholder={translation.contact.email} 
                    onChange={handleChange}
                    required></input>
                </div>
                <div className="form-row">
                    <textarea 
                    className="form-input message" 
                    name="message" 
                    value={emailData.message} 
                    placeholder={translation.contact.message}
                    onChange={handleChange}
                    required></textarea>
                </div>
                <button className="submit" type="submit">{translation.contact.submit}</button>
            </form>
        </div>
    )
}