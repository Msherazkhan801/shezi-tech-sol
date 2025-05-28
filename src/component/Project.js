import React from "react";

const ProjectCard = ({ 
  title, 
  description, 
  techStack, 
  liveLink, 
  repoLink,
  imageUrl
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-md hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
      {imageUrl && (
        <img 
          className="w-full h-48 object-cover" 
          src={imageUrl} 
          alt={`${title} screenshot`} 
        />
      )}
      <div className="px-6 py-4">
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <p className="text-gray-700 text-base mb-3">{description}</p>
        <p className="text-sm text-gray-500 mb-4">
          <strong>Tech Stack:</strong> {techStack.join(", ")}
        </p>
        <div className="flex space-x-4">
          {liveLink && (
            <a 
              href={liveLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Live Demo
            </a>
          )}
          {repoLink && (
            <a 
              href={repoLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              GitHub Repo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
