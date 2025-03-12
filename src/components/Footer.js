// Footer.js
import React from 'react';
import { Linkedin, Github, Mail, Heart } from 'lucide-react';

const Footer = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800'} py-6`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Tohid Khan</h3>
            <p className="text-sm mt-1">Full-stack Developer</p>
          </div>
          
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a 
              href="https://www.linkedin.com/in/your-linkedin" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`hover:${darkMode ? 'text-blue-400' : 'text-blue-600'} transition-colors`}
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://github.com/tohidkhan2464" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`hover:${darkMode ? 'text-purple-400' : 'text-purple-600'} transition-colors`}
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="mailto:tohid1193407@gmail.com" 
              className={`hover:${darkMode ? 'text-red-400' : 'text-red-600'} transition-colors`}
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
          
          <div className="text-sm">
            <p>&copy; {currentYear} Tohid Khan. All rights reserved.</p>
          </div>
        </div>
        
        <div className="mt-6 pt-4 border-t border-gray-300 text-center text-sm">
          <p className="flex items-center justify-center">
            Made with <Heart className="mx-1 text-red-500" size={16} fill="currentColor" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;