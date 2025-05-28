import React, { useState } from "react";
import ProjectCard from '../component/Project'
import { ProjectsData } from '../utlis/ProjectData'

const categories = [
  { key: "all", label: "All" },
  { key: "web", label: "Web Development" },
  { key: "seo", label: "SEO" },
  { key: "academic", label: "Academic Writing" },
];

const ProjectPage = () => {
  const [activeTab, setActiveTab] = useState("all");

  // Filter projects by category unless "all"
  const filteredProjects =
    activeTab === "all"
      ? ProjectsData
      : ProjectsData.filter((p) => p.category === activeTab);

  // Function to render correct card based on category
  const renderCard = (project, idx) => {
    if (activeTab === "web") {
      return <ProjectCard key={idx} {...project} />;

    }
    if (activeTab === "seo") {
      return <ProjectCard key={idx} {...project} />;
      // return 'test seo'
    }
    if (activeTab === "academic") {
      return <ProjectCard key={idx} {...project} />;

      //  return 'test acadmic'
    }
    // For 'all' or 'web', show ProjectCard
    return <ProjectCard key={idx} {...project} />;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 my-6">
      {/* Tabs */}
      <div className="flex space-x-4 mb-6 border-b border-gray-300 justify-center">
        {categories.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`pb-2 font-semibold transition-colors duration-200 ${
              activeTab === key
                ? "border-b-4 border-blue-600 text-blue-600"
                : "text-gray-600 hover:text-blue-600"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, idx) => renderCard(project, idx))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No projects found in this category.
          </p>
        )}
      </div>
    </div>
  );
};

export default ProjectPage;
