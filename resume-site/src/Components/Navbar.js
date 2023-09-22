import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { NavLink} from "react-router-dom";
import translations from "./Translations";
import LanguageSelector from "./LanguageSelector"

export default function Navbar() {
    const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('selectedLanguage'));
    
    useEffect(() => {
      setSelectedLanguage(localStorage.getItem('selectedLanguage'));
    }, []);
    const translation = translations[selectedLanguage];

    if (!selectedLanguage) {
      const defaultLanguage = 'eng';
      localStorage.setItem('selectedLanguage', defaultLanguage);
    }

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
      <div>
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <h1 className= {`navbar-name ${scrolled ? 'scrolled' : ''}`}> Arda Ceylan </h1>
            <div>
                <NavLink
                    draggable="false"
                    className=  {({isActive}) => isActive ? `active-navlink ${scrolled ? 'scrolled' : ''}` : `navlink ${scrolled ? 'scrolled' : ''}`}
                    to = "/"
                >
                    {translation.navbar.home}
                </NavLink>
                <NavLink 
                    draggable="false"
                    className= {({isActive}) => isActive ? `active-navlink ${scrolled ? 'scrolled' : ''}` : `navlink ${scrolled ? 'scrolled' : ''}`}
                    to = "/about"
                >
                    {translation.navbar.about}
                </NavLink>
                <NavLink 
                    draggable="false"
                    className= {({isActive}) => isActive ? `active-navlink ${scrolled ? 'scrolled' : ''}` : `navlink ${scrolled ? 'scrolled' : ''}`}
                    to = "/experience"
                >
                    {translation.navbar.experience}
                </NavLink>
                <NavLink
                    draggable="false"
                    className= {({isActive}) => isActive ? `active-navlink ${scrolled ? 'scrolled' : ''}` : `navlink ${scrolled ? 'scrolled' : ''}`}
                    to = "/education"
                >
                    {translation.navbar.education}
                </NavLink>
                <NavLink
                    draggable="false"
                    className= {({isActive}) => isActive ? `active-navlink ${scrolled ? 'scrolled' : ''}` : `navlink ${scrolled ? 'scrolled' : ''}`}
                    to = "/contact"
                >
                    {translation.navbar.contact}
                </NavLink>
            </div>
            <LanguageSelector />
        </nav>
      </div>
    )
}