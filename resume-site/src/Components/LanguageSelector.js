import { useEffect, useState } from 'react';
import translations from "./Translations";

export const defaultSelectedOption = 'eng';

export default function LanguageSelector() {
    const [selectedOption, setSelectedOption] = useState(
    localStorage.getItem('selectedLanguage') || defaultSelectedOption
    );

    const [scrolled, setScrolled] = useState(false);

    const handleOptionChange = (e) => {
        const newSelectedOption = e.target.value;
        setSelectedOption(newSelectedOption);
        localStorage.setItem('selectedLanguage', newSelectedOption);
        window.location.reload();
      };

    useEffect(() => {
        const savedSelectedOption = localStorage.getItem('selectedLanguage');
        if (savedSelectedOption) {
          setSelectedOption(savedSelectedOption);
        }
      }, []);

      const translation = translations[selectedOption];

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

    return (
        <div className={`box ${scrolled ? 'scrolled' : ''}`}>
            <label htmlFor="languageSelect" className={`selection ${scrolled ? 'scrolled' : ''}`}>{translation.language.change}</label>
            <select
              id="languageSelect"
              value={selectedOption}
              onChange={handleOptionChange}
              >
                <option value = "eng">English</option>
                <option value = "tr">Türkçe</option>
            </select>
        </div>
    )
}