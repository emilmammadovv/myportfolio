import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <div className="space-x-4">
          {["Home", "About", "Projects", "Contact"].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="inline-block"
            >
              <Link to={`/${item.toLowerCase()}`} className="hover:text-primary">
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

