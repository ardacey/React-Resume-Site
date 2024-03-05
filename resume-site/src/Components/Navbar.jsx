import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { NavLink} from "react-router-dom";
import translations from "./Translations";
import LanguageSelector from "./LanguageSelector"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('selectedLanguage'));
    
    useEffect(() => {
      setSelectedLanguage(localStorage.getItem('selectedLanguage'));
    }, []);

    if (!selectedLanguage) {
      const defaultLanguage = 'eng';
      localStorage.setItem('selectedLanguage', defaultLanguage);
      setSelectedLanguage(defaultLanguage);
    }

    const translation = translations[selectedLanguage] || translations['eng'];

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
          if (window.innerWidth > 768) {
            if (window.scrollY > 99) {
              setScrolled(true);
            } else {
              setScrolled(false);
            }
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
      setIsMobileMenuOpen(false);
    };

    useEffect(() => {
      const closeMobileMenu = (event) => {
        if (
          isMobileMenuOpen &&
          event.target.closest(".mobile-menu-icon") === null &&
          event.target.closest(".navbar-links") === null
        ) {
          setIsMobileMenuOpen(false);
        }
      };
    
      document.addEventListener('click', closeMobileMenu);
    
      return () => {
        document.removeEventListener('click', closeMobileMenu);
      };
    }, [isMobileMenuOpen]);

    return (
      <div>
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <h1 className= {`navbar-name ${scrolled ? 'scrolled' : ''}`}> Arda Ceylan </h1>
            <div className={`mobile-menu-icon ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
              <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
            </div>
            <div className={`navbar-links ${isMobileMenuOpen ? 'open' : ''}`}>
                <NavLink
                    draggable="false"
                    className=  {({isActive}) => isActive ? `active-navlink ${scrolled ? 'scrolled' : ''}` : `navlink ${scrolled ? 'scrolled' : ''}`}
                    to = "/"
                    onClick={closeMobileMenu}
                >
                    {translation.navbar.home}
                </NavLink>
                <NavLink 
                    draggable="false"
                    className= {({isActive}) => isActive ? `active-navlink ${scrolled ? 'scrolled' : ''}` : `navlink ${scrolled ? 'scrolled' : ''}`}
                    to = "/about"
                    onClick={closeMobileMenu}
                >
                    {translation.navbar.about}
                </NavLink>
                <NavLink 
                    draggable="false"
                    className= {({isActive}) => isActive ? `active-navlink ${scrolled ? 'scrolled' : ''}` : `navlink ${scrolled ? 'scrolled' : ''}`}
                    to = "/projects"
                    onClick={closeMobileMenu}
                >
                    {translation.navbar.projects}
                </NavLink>
                <NavLink 
                    draggable="false"
                    className= {({isActive}) => isActive ? `active-navlink ${scrolled ? 'scrolled' : ''}` : `navlink ${scrolled ? 'scrolled' : ''}`}
                    to = "/experience"
                    onClick={closeMobileMenu}
                >
                    {translation.navbar.experience}
                </NavLink>
                <NavLink
                    draggable="false"
                    className= {({isActive}) => isActive ? `active-navlink ${scrolled ? 'scrolled' : ''}` : `navlink ${scrolled ? 'scrolled' : ''}`}
                    to = "/education"
                    onClick={closeMobileMenu}
                >
                    {translation.navbar.education}
                </NavLink>
                <NavLink
                    draggable="false"
                    className= {({isActive}) => isActive ? `active-navlink ${scrolled ? 'scrolled' : ''}` : `navlink ${scrolled ? 'scrolled' : ''}`}
                    to = "/contact"
                    onClick={closeMobileMenu}
                >
                    {translation.navbar.contact}
                </NavLink>
            </div>
            <LanguageSelector />
        </nav>
      </div>
    )
}