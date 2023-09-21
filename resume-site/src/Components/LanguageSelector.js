import { useEffect, useState } from 'react';

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
        <div className={`box ${scrolled ? 'scrolled' : ''}`}>
            <select value={selectedOption} onChange={handleOptionChange}>
                <option value = "eng">English</option>
                <option value = "tr">Türkçe</option>
            </select>
        </div>
    )
}