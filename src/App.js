import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import ProjectCard from "./components/ProjectCard";
import Footer from "./components/Footer";
import profilePic from "./assets/profile.jpg"; // Add your photo here
import resumeFile from "./assets/resume.pdf"; // Add your resume here
import QRCodeComponent from "./components/QRCodeComponent";

// Add Google Fonts to your index.html or CSS file
// <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&family=Roboto+Mono:wght@400;700&display=swap" rel="stylesheet">

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "education", "projects", "contact"];
      let currentSection = "about";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= window.innerHeight * 0.3) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-blue-900 to-black text-white p-4 fixed w-full top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold font-poppins"
        >
          Emil Mammadov
        </motion.h1>
        <div className="space-x-6">
          {["about", "education", "projects", "contact"].map((section, index) => (
            <motion.a
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`inline-block cursor-pointer hover:text-primary transition-all duration-300 font-roboto-mono ${
                activeSection === section ? "text-yellow-400 font-bold" : ""
              }`}
              href={`#${section}`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </motion.a>
          ))}
        </div>
      </div>
    </nav>
  );
};

const About = () => {
  return (
    <section id="about" className="py-32 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-center text-white">
      <div className="container mx-auto max-w-4xl">
        <motion.img
          src={profilePic}
          alt="Profile"
          className="w-80 h-80 mx-auto rounded-full shadow-2xl mb-6 object-cover border-4 border-yellow-400"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.h2
          className="text-4xl font-bold font-poppins"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="mt-4 text-gray-300 font-roboto-mono leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Hey! I'm Emil Mammadov, an international student at George Mason University pursuing a Bachelor's in Computer Science. My journey in tech started with a passion for problem-solving, which led me to develop skills in Python, Java, and C. I've had hands-on experience as a Help Desk Intern at HydroMeteo Systems, troubleshooting hardware and software issues while sharpening my ability to think critically and adapt quickly.
          Beyond academics, I'm someone who loves challenges—whether it’s in tech, strategy, or competition. I’ve represented Azerbaijan in sailing and won multiple national chess championships, proving my ability to think ahead and strategize under pressure. On campus, I take initiative—whether it’s founding the Azerbaijani Student Association or organizing high-impact fundraising events as a Fundraising Chair for Pi Kappa Alpha fraternity.
          I thrive in dynamic environments, love collaborating with teams, and am always looking for opportunities to expand my knowledge in software development and technical problem-solving. If you're working on something exciting—let’s connect!
        </motion.p>
      </div>
    </section>
  );
};

const Education = () => {
  return (
    <section id="education" className="py-32 bg-gradient-to-r from-gray-700 via-gray-800 to-black text-center text-gray-300">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-white font-poppins">Education</h2>
        <p className="mt-4 font-roboto-mono">Currently pursuing a degree in Computer Science at George Mason University.</p>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-32 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-center text-gray-300">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-white font-poppins">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {[
            {
              title: "MiniCheckers AI Development",
              description: "Developed a simplified checkers game with an AI opponent using recursive decision-making algorithms.",
            },
            {
              title: "QueueSim: Priority-Based Queue Management System",
              description: "Designed a Java-based simulation for queue optimization, implementing VIP prioritization and dynamic client management.",
            },
            {
              title: "Library Management System",
              description: "Built a Java-based system to manage book rentals, reader tracking, and automated library operations.",
            },
            {
              title: "Game of Life Simulation",
              description: "Developed an interactive Java-based simulation of Conway’s Game of Life, implementing custom data structures.",
            },
          ].map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold text-white font-poppins">{project.title}</h3>
              <p className="mt-2 text-gray-400 font-roboto-mono">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};



const Contact = () => {
  return (
    <section id="contact" className="py-32 flex items-center justify-center bg-gradient-to-r from-gray-800 via-gray-900 to-black text-center text-white min-h-screen shadow-lg">
      <div className="container mx-auto max-w-4xl flex flex-col justify-center">
        <h2 className="text-4xl font-bold text-white mb-8 font-poppins">Contact</h2>
        <div className="flex flex-col items-center space-y-6">
          <div className="flex space-x-8 text-4xl">
            <motion.a href="mailto:emammado@gmu.edu" className="text-yellow-400 hover:text-yellow-300 transition-all duration-300" whileHover={{ scale: 1.2 }}>
              <FaEnvelope />
            </motion.a>
            <motion.a href="https://www.linkedin.com/in/emil-mammadovv" target="_blank" className="text-blue-400 hover:text-blue-300 transition-all duration-300" whileHover={{ scale: 1.2 }}>
              <FaLinkedin />
            </motion.a>
            <motion.a href="https://github.com/emilmammadovv" target="_blank" className="text-gray-300 hover:text-gray-200 transition-all duration-300" whileHover={{ scale: 1.2 }}>
              <FaGithub />
            </motion.a>
            <motion.a href={resumeFile} download className="text-red-400 hover:text-red-300 transition-all duration-300" whileHover={{ scale: 1.2 }}>
              📄
            </motion.a>
          </div>
          {/* QR Code Below Contact Icons */}
          <QRCodeComponent />
        </div>
      </div>
    </section>
  );
};




const App = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-black min-h-screen text-white">
      <Navbar />
      <div className="pt-20">
        <About />
        <Education />
        <Projects />
        <div className="pb-32"></div>
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default App;