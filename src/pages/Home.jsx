import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center py-20 bg-gray-100"
    >
      <h1 className="text-5xl font-bold mb-4">Hi, I'm Your Name</h1>
      <p className="text-lg text-gray-600">A passionate developer building amazing things.</p>
      <a
        href="/projects"
        className="mt-8 inline-block bg-primary text-white px-6 py-2 rounded hover:bg-accent transition-all duration-300"
      >
        View My Projects
      </a>
    </motion.div>
  );
}

export default Home;
