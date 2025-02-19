import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        
        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        {/* Navigation Links */}
        <div
          className={`md:flex space-x-4 ${menuOpen ? "block" : "hidden"} absolute md:static top-16 left-0 w-full md:w-auto bg-gray-800 md:bg-transparent text-center md:text-left p-4 md:p-0`}
        >
          {["Home", "About", "Education", "Projects", "Contact"].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="py-2 md:py-0"
            >
              <Link to={`/${item.toLowerCase()}`} className="block md:inline hover:text-yellow-400 text-lg">
                {item}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
