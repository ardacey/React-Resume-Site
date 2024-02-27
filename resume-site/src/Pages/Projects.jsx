import React, { useState, useEffect } from 'react';
import translations from "../Components/Translations";

export default function Projects() {
    const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('selectedLanguage'));
    
    useEffect(() => {
      setSelectedLanguage(localStorage.getItem('selectedLanguage'));
    }, []);
    const translation = translations[selectedLanguage];

    return (
        <div style={{
            height: '300vh',
        }}>
            <div className='project-content'>
                <iframe 
                className='gif1'
                src='giphy.gif' >
                </iframe>
                <p className='project-text1'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pharetra sapien et eleifend interdum. Nunc tristique rhoncus justo nec ultricies. Cras placerat finibus odio sit amet auctor. Donec ex nulla, efficitur vitae diam sit amet, dictum convallis magna. Maecenas eget felis viverra est convallis aliquet id in arcu. Proin id sodales nisl. Aenean quis scelerisque lacus, in rhoncus neque. Sed dui nibh, tempor ac leo ut, consequat blandit mi. Nulla facilisi. Nunc fermentum tellus sit amet turpis porta, eu mattis nunc rhoncus. Nam cursus condimentum egestas. Proin fermentum dignissim lorem vel auctor. Pellentesque condimentum, velit sed semper commodo, sapien odio aliquam odio, eu facilisis ipsum sapien ac arcu. Morbi efficitur ultrices dui, semper consequat velit dapibus at.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pharetra sapien et eleifend interdum. Nunc tristique rhoncus justo nec ultricies. Cras placerat finibus odio sit amet auctor. Donec ex nulla, efficitur vitae diam sit amet, dictum convallis magna.
                </p>
            </div>
            <div className='project-content'>
                <iframe 
                className='gif2'
                src='giphy.gif' >
                </iframe>
                <p className='project-text2'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pharetra sapien et eleifend interdum. Nunc tristique rhoncus justo nec ultricies. Cras placerat finibus odio sit amet auctor. Donec ex nulla, efficitur vitae diam sit amet, dictum convallis magna. Maecenas eget felis viverra est convallis aliquet id in arcu. Proin id sodales nisl. Aenean quis scelerisque lacus, in rhoncus neque. Sed dui nibh, tempor ac leo ut, consequat blandit mi. Nulla facilisi. Nunc fermentum tellus sit amet turpis porta, eu mattis nunc rhoncus. Nam cursus condimentum egestas. Proin fermentum dignissim lorem vel auctor. Pellentesque condimentum, velit sed semper commodo, sapien odio aliquam odio, eu facilisis ipsum sapien ac arcu. Morbi efficitur ultrices dui, semper consequat velit dapibus at.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pharetra sapien et eleifend interdum. Nunc tristique rhoncus justo nec ultricies. Cras placerat finibus odio sit amet auctor. Donec ex nulla, efficitur vitae diam sit amet, dictum convallis magna.
                </p>
            </div>
            <div className='project-content'>
                <iframe 
                className='gif1'
                src='giphy.gif' >
                </iframe>
                <p className='project-text1'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pharetra sapien et eleifend interdum. Nunc tristique rhoncus justo nec ultricies. Cras placerat finibus odio sit amet auctor. Donec ex nulla, efficitur vitae diam sit amet, dictum convallis magna. Maecenas eget felis viverra est convallis aliquet id in arcu. Proin id sodales nisl. Aenean quis scelerisque lacus, in rhoncus neque. Sed dui nibh, tempor ac leo ut, consequat blandit mi. Nulla facilisi. Nunc fermentum tellus sit amet turpis porta, eu mattis nunc rhoncus. Nam cursus condimentum egestas. Proin fermentum dignissim lorem vel auctor. Pellentesque condimentum, velit sed semper commodo, sapien odio aliquam odio, eu facilisis ipsum sapien ac arcu. Morbi efficitur ultrices dui, semper consequat velit dapibus at.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pharetra sapien et eleifend interdum. Nunc tristique rhoncus justo nec ultricies. Cras placerat finibus odio sit amet auctor. Donec ex nulla, efficitur vitae diam sit amet, dictum convallis magna.
                </p>
            </div>
            <div className='project-content'>
                <iframe 
                className='gif2'
                src='giphy.gif' >
                </iframe>
                <p className='project-text2'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pharetra sapien et eleifend interdum. Nunc tristique rhoncus justo nec ultricies. Cras placerat finibus odio sit amet auctor. Donec ex nulla, efficitur vitae diam sit amet, dictum convallis magna. Maecenas eget felis viverra est convallis aliquet id in arcu. Proin id sodales nisl. Aenean quis scelerisque lacus, in rhoncus neque. Sed dui nibh, tempor ac leo ut, consequat blandit mi. Nulla facilisi. Nunc fermentum tellus sit amet turpis porta, eu mattis nunc rhoncus. Nam cursus condimentum egestas. Proin fermentum dignissim lorem vel auctor. Pellentesque condimentum, velit sed semper commodo, sapien odio aliquam odio, eu facilisis ipsum sapien ac arcu. Morbi efficitur ultrices dui, semper consequat velit dapibus at.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pharetra sapien et eleifend interdum. Nunc tristique rhoncus justo nec ultricies. Cras placerat finibus odio sit amet auctor. Donec ex nulla, efficitur vitae diam sit amet, dictum convallis magna.
                </p>
            </div>
        </div>
    )
}