// components/Hero.js
import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import image from '../assets/image.JPG';

const Hero = ({ darkMode }) => {
  const typedTextRef = useRef(null);
  
  useEffect(() => {
    const roles = [
      'Full-Stack Developer',
      'React.js Developer',
      'Flutter Developer',
      'Node.js Developer',
      'FastAPI Developer',
      'AI Enthusiast'
    ];
    
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingDelay = 100;
    
    const type = () => {
      const currentRole = roles[roleIndex];
      const typedElement = typedTextRef.current;
      
      if (!typedElement) return;
      
      if (isDeleting) {
        typedElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typingDelay = 50;
      } else {
        typedElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typingDelay = 150;
      }
      
      if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        typingDelay = 1500; // Pause at end
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingDelay = 500; // Pause before next word
      }
      
      setTimeout(type, typingDelay);
    };
    
    const typingTimeout = setTimeout(type, 1000);
    
    return () => {
      clearTimeout(typingTimeout);
    };
  }, []);

  return (
    <section id="home" className={`min-h-screen flex items-center justify-center relative pt-16 ${darkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-blue-50 via-white to-gray-50'}`}>
      <div className={`absolute inset-0 ${darkMode ? 'opacity-20' : 'opacity-5'}`}>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500 filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 rounded-full bg-purple-500 filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col items-center text-center md:text-left md:flex-row md:justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="mb-2">
              <span className={`inline-block px-4 py-1 rounded-full text-sm ${darkMode ? 'bg-blue-900/30 text-blue-300' : 'bg-blue-100 text-blue-800'}`}>
                Hello, I'm
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Tohid Khan
            </h1>
            <div className="flex items-center justify-center md:justify-start mb-6">
              <span className={`text-xl md:text-2xl mr-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>I'm a</span>
              <span ref={typedTextRef} className={`text-xl md:text-2xl font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}></span>
              <span className="animate-blink ml-1 text-xl md:text-2xl">|</span>
            </div>
            <p className={`text-lg mb-8 max-w-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Specializing in building exceptional digital experiences with React.js, Node.js, FastAPI, and MongoDB.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a 
                href="#contact" 
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  darkMode 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                Contact Me
              </a>
              <a 
                href="#projects" 
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  darkMode 
                    ? 'bg-transparent border border-blue-500 text-blue-400 hover:bg-blue-900/20' 
                    : 'bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-50'
                }`}
              >
                View Projects
              </a>
            </div>
            <div className="flex mt-8 space-x-6 justify-center md:justify-start">
              <a 
                href="https://github.com/tohidkhan2464" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-all ${
                  darkMode 
                    ? 'bg-gray-800 hover:bg-gray-700 text-white' 
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                }`}
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/tohidkhan324/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-all ${
                  darkMode 
                    ? 'bg-gray-800 hover:bg-gray-700 text-white' 
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                }`}
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:tohid1193407@gmail.com" 
                className={`p-2 rounded-full transition-all ${
                  darkMode 
                    ? 'bg-gray-800 hover:bg-gray-700 text-white' 
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                }`}
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="md:w-2/5">
            <div className={`relative rounded-2xl overflow-hidden p-1 ${darkMode ? 'bg-gradient-to-br from-blue-500 to-purple-600' : 'bg-gradient-to-br from-blue-400 to-purple-500'}`}>
              <div className={`rounded-xl overflow-hidden ${darkMode ? 'bg-gray-900' : 'bg-white'} p-4`}>
                <img 
                  src={image} 
                  alt="Tohid Khan" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a 
          href="#about" 
          className={`p-2 rounded-full ${darkMode ? 'bg-gray-800 text-blue-400' : 'bg-blue-100 text-blue-600'}`}
          aria-label="Scroll down"
        >
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;