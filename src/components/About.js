// components/About.js
import React from 'react';
import { User, Code, Database, Layout, Server, Award } from 'lucide-react';

const About = ({ darkMode }) => {
  return (
    <section id="about" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className={`h-1 w-20 mx-auto rounded-full ${darkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
              <p className={`text-lg mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                I'm a full-stack developer specializing in <span className={darkMode ? 'text-blue-400' : 'text-blue-600'}>React.js</span>, <span className={darkMode ? 'text-blue-400' : 'text-blue-600'}>Node.js</span>, <span className={darkMode ? 'text-blue-400' : 'text-blue-600'}>FastAPI</span>, and <span className={darkMode ? 'text-blue-400' : 'text-blue-600'}>MongoDB</span>, with experience building scalable web applications and AI-driven solutions.
              </p>
              <p className={`text-lg mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Currently pursuing my Bachelor's in Artificial Intelligence & Data Science at College of Technology and Engineering, Udaipur, I'm passionate about creating efficient, user-friendly platforms with a strong foundation in data structures, distributed systems, and cloud computing.
              </p>
              <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                I enjoy solving real-world problems through technology and constantly expanding my skills through hands-on experience and collaborative projects.
              </p>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} flex items-start space-x-4`}>
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
                  <Code size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Front-End</h3>
                  <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>React.js, Tailwind CSS, Material-UI, Flutter</p>
                </div>
              </div>
              
              <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} flex items-start space-x-4`}>
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-purple-900/30 text-purple-400' : 'bg-purple-100 text-purple-600'}`}>
                  <Server size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Back-End</h3>
                  <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>FastAPI, Node.js, Express.js</p>
                </div>
              </div>
              
              <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} flex items-start space-x-4`}>
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-600'}`}>
                  <Database size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Databases</h3>
                  <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>MongoDB, PostgreSQL, Firebase, SQL</p>
                </div>
              </div>
              
              <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} flex items-start space-x-4`}>
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-orange-900/30 text-orange-400' : 'bg-orange-100 text-orange-600'}`}>
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Leadership</h3>
                  <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Club Lead, Robotics Club (CTAE)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;