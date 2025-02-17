function ProjectCard({ title, description, link }) {
    return (
      <div className="border rounded-lg p-4 shadow-md">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-600">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          View Project
        </a>
      </div>
    );
  }
  
  export default ProjectCard;
  