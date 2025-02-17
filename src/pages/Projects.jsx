import { motion } from "framer-motion";

function Projects() {
  const projects = [
    { title: "Project 1", description: "A cool project.", link: "#" },
    { title: "Project 2", description: "Another great project.", link: "#" },
  ];

  return (
    <div className="container mx-auto py-20">
      <h1 className="text-4xl font-bold mb-6">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="border rounded-lg p-4 shadow-md bg-white"
          >
            <h2 className="text-xl font-bold">{project.title}</h2>
            <p className="text-gray-600 mt-2">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline mt-4 inline-block"
            >
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
