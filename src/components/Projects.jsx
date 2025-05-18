import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "SQLite Playground",
    description: "A TypeScript-based playground for learning and experimenting with SQLite databases. Features an interactive interface for writing and executing SQL queries.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg",
    tags: ["TypeScript", "SQLite", "React"],
    link: "https://github.com/AkshithD/SQLite-Playground",
    demo: "https://akshithd.github.io/SQLite-Playground/"
  },
  {
    id: 2,
    title: "Learning Management Tool",
    description: "A full-stack web application for exam booking and user management. Built with Express.js, PostgreSQL, and JWT authentication, featuring a responsive TailwindCSS frontend and an MVC-structured backend for maintainability.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    tags: ["Express.js", "PostgreSQL", "JWT", "TailwindCSS", "MVC"]
  },
  {
    id: 3,
    title: "Stock Sensei",
    description: "A JavaScript application for tracking and analyzing stock market data. Provides real-time updates and visualization of stock trends.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    tags: ["JavaScript", "React", "Chart.js"],
    link: "https://github.com/AkshithD/Stocks-App"
  },
  {
    id: 4,
    title: "Android Cafe App",
    description: "A mobile cafe ordering application built using Java and Android Studio. Features menu selection, order customization, real-time order tracking, and order history management.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg",
    tags: ["Java", "Android", "OOP"],
    link: "https://github.com/AkshithD/Android-Cafe-App",
    demo: "https://github.com/AkshithD/Android-Cafe-App#-demo"
  },
  {
    id: 5,
    title: "RU File System",
    description: "A custom file system implementation in C, featuring block management, file operations, and efficient data storage mechanisms.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
    tags: ["C", "File Systems", "Systems Programming"],
    link: "https://github.com/AkshithD/RU-file-system"
  },
  {
    id: 6,
    title: "User-level Memory Management",
    description: "Implementation of user-level memory management system in C, demonstrating memory allocation, deallocation, and optimization techniques.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
    tags: ["C", "Memory Management", "Systems Programming"],
    link: "https://github.com/AkshithD/User-level-Memory-Management"
  },
  {
    id: 7,
    title: "Thread Library and Scheduler",
    description: "Custom thread library implementation with a scheduler in C, supporting thread creation, management, and synchronization primitives.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
    tags: ["C", "Threading", "Concurrency"],
    link: "https://github.com/AkshithD/Thread-Library-and-Scheduler"
  },
  {
    id: 8,
    title: "Rutgers Eats",
    description: "A food delivery application for Rutgers University, connecting students with campus dining options and local restaurants.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    tags: ["JavaScript", "React", "Node.js"],
    link: "https://github.com/AkshithD/Rutgers-Eats"
  },
  {
    id: 9,
    title: "Validate Courses",
    description: "A Java application that validates courses based on given prerequisites. Implemented using graph data structure for efficient course dependency management.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    tags: ["Java", "Graph Theory", "Data Structures"],
    link: "https://github.com/AkshithD/Validate-Courses"
  },
  {
    id: 10,
    title: "Huffman Coding",
    description: "Implementation of Huffman coding algorithm for file compression and decompression, using tree data structures for efficient encoding.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    tags: ["Java", "Data Compression", "Trees"],
    link: "https://github.com/AkshithD/Huffman-Coding"
  },
  {
    id: 11,
    title: "Imagify",
    description: "Java application for image processing with various filters and operations, supporting multiple image formats and custom transformations.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    tags: ["Java", "Image Processing", "Filters"],
    link: "https://github.com/AkshithD/Imagify"
  },
  {
    id: 12,
    title: "Calculator",
    description: "A feature-rich calculator application with support for basic arithmetic operations, scientific calculations, and a user-friendly interface.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    tags: ["HTML/CSS","JavaScript", "GUI", "Mathematics"],
    link: "https://github.com/AkshithD/Calculator"
  },
  {
    id: 13,
    title: "SketchPad",
    description: "An interactive drawing application allowing users to create and edit sketches with various tools and features.",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    tags: ["HTML/CSS","JavaScript", "GUI", "Graphics"],
    link: "https://github.com/AkshithD/SketchPad"
  }
];

const ProjectCard = ({ project }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
    >
      <div className="h-48 bg-gray-600 flex items-center justify-center p-4">
        <img 
          src={project.image} 
          alt={project.title} 
          className="h-24 w-24 object-contain"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="px-2 py-1 bg-gray-600 rounded-md text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          {project.link && (
            <a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition duration-300"
            >
              View Project
            </a>
          )}
          {project.demo && (
            <a 
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition duration-300"
            >
              View Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-12 bg-gray-800 bg-opacity-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="text-center mt-12">
          <a 
            href="https://github.com/AkshithD"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-6 py-3 rounded-lg font-medium transition duration-300"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects; 