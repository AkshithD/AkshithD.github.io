import { motion } from 'framer-motion'
import Particles from 'react-tsparticles'
import { loadFull } from "tsparticles";
import { useCallback, useState, useEffect, useRef } from 'react';
import Projects from './components/Projects';

const skills = [
  {
    name: 'HTML5',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg'
  },
  {
    name: 'CSS3',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg'
  },
  {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg'
  },
  {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg'
  },
  {
    name: 'Node.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg'
  },
  {
    name: 'Git',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg'
  },
  {
    name: 'Tailwind CSS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg'
  },
  {
    name: 'TypeScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg'
  },
  {
    name: 'Python',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg'
  },
  {
    name: 'Java',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg'
  },
  {
    name: 'C/C++',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg'
  },
  {
    name: 'MySQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg'
  },
  {
    name: 'PostgreSQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg'
  },
  {
    name: 'MongoDB',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg'
  },
  {
    name: 'Spring Boot',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg'
  },
  {
    name: 'AWS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg'
  }
];

// Simple throttle function to limit event firing
const throttle = (func, limit) => {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

function App() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  // Mouse position state for the interactive background
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const animationRef = useRef(null);
  
  // Update mouse position with throttling
  useEffect(() => {
    // Throttled mouse move handler
    const handleMouseMove = throttle((e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    }, 16); // ~60fps
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 pointer-events-none"
        options={{
          background: {
            opacity: 0
          },
          fpsLimit: 60,
          particles: {
            color: {
              value: "#3b82f6"
            },
            links: {
              color: "#3b82f6",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1
            },
            collisions: {
              enable: false
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 1.2,
              straight: false
            },
            number: {
              density: {
                enable: true,
                area: 800
              },
              value: 40
            },
            opacity: {
              value: 0.3
            },
            shape: {
              type: "circle"
            },
            size: {
              value: { min: 1, max: 3 }
            }
          },
          detectRetina: true
        }}
      />

      {/* Interactive Mouse-following Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none will-change-transform">
        <motion.div 
          ref={animationRef}
          className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-blue-800/25 to-indigo-800/25 blur-3xl will-change-transform"
          style={{
            x: mousePosition.x - 250,
            y: mousePosition.y - 250,
            translateZ: 0
          }}
          animate={{
            x: mousePosition.x - 250,
            y: mousePosition.y - 250,
          }}
          transition={{
            type: "tween",
            ease: "linear",
            duration: 0.2
          }}
        />
        <motion.div 
          className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-r from-purple-800/25 to-blue-700/25 blur-2xl will-change-transform"
          style={{
            x: mousePosition.x - 150,
            y: mousePosition.y - 150,
            translateZ: 0
          }}
          animate={{
            x: mousePosition.x - 150,
            y: mousePosition.y - 150,
          }}
          transition={{
            type: "tween",
            ease: "linear",
            duration: 0.15
          }}
        />
        <motion.div 
          className="absolute w-[150px] h-[150px] rounded-full bg-blue-500/20 blur-xl will-change-transform"
          style={{
            x: mousePosition.x - 75,
            y: mousePosition.y - 75,
            translateZ: 0
          }}
          animate={{
            x: mousePosition.x - 75,
            y: mousePosition.y - 75,
          }}
          transition={{
            type: "tween", 
            ease: "linear",
            duration: 0.1
          }}
        />
      </div>

      {/* Hero Section */}
      <header className="min-h-screen flex items-center justify-center relative z-10">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            {/* Animated subtitle */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-blue-900/30 rounded-full text-blue-300 text-sm font-medium tracking-wider border border-blue-700/50">
                <span className="animate-pulse inline-block h-2 w-2 rounded-full bg-blue-400 mr-2"></span>
                PORTFOLIO
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-4"
            >
              <motion.span
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="inline-block mr-2"
              >
                Hi, I'm
              </motion.span>
              <motion.span
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300 inline-block"
              >
                Akshith Dandemraju
              </motion.span>
            </motion.h1>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-3xl md:text-4xl text-gray-400 mb-6"
            >
              <motion.span
                whileHover={{ 
                  scale: 1.05,
                  textShadow: "0 0 8px rgba(59, 130, 246, 0.5)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="inline-block"
              >
                Software Developer
              </motion.span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-gray-500 mb-12 max-w-lg mx-auto"
            >
              <motion.span
                whileHover={{ 
                  scale: 1.02,
                  color: "#fff"
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="inline-block"
              >
                Driven to become a Full-Stack Developer and Solutions Architect, with a passion for system design, cloud infrastructure, and creating impactful end-to-end software solutions.
              </motion.span>
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <motion.button 
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
                }}
                className="relative bg-gradient-to-r from-blue-700 to-blue-500 hover:from-blue-800 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 shadow-lg group overflow-hidden"
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 w-3 bg-white/20 skew-x-[-45deg] group-hover:animate-shine hidden sm:block"></div>
              </motion.button>
            </motion.div>
            
            {/* Scroll indicator */}
            <motion.div 
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
                <motion.div 
                  className="w-1 h-2 bg-blue-500 rounded-full"
                  animate={{ 
                    y: [0, 12, 0],
                  }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                ></motion.div>
              </div>
              <p className="text-white/50 text-xs mt-2">Scroll Down</p>
            </motion.div>
          </motion.div>
        </div>
      </header>

      <Projects />

      {/* Skills Section */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <div key={skill.name} className="bg-gray-700 p-4 rounded-lg text-center hover:bg-gray-600 transition duration-300">
                <div className="flex justify-center mb-2">
                  <img 
                    src={skill.icon} 
                    alt={skill.name} 
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <div className="font-medium">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-xl font-bold mb-4 md:mb-0">Akshith Dandemraju</div>
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a 
                href="https://github.com/AkshithD" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-blue-400 transition duration-300"
              >
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/akshith-d/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-blue-400 transition duration-300"
              >
                LinkedIn
              </a>
            </div>
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} All Rights Reserved
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%) skew(-45deg);
          }
          100% {
            transform: translateX(200%) skew(-45deg);
          }
        }
        
        .animate-shine {
          animation: shine 0.2s infinite;
        }
      `}</style>
    </div>
  )
}

export default App
