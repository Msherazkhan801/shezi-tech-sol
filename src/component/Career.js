import React, { useState } from "react";
import ApplyForm from "./ApplyForm"; // your form component

const jobOpenings = [
  {
    id: 1,
    title: "Frontend Developer",
    location: "Remote",
    type: "Full-time",
    description: "Build and maintain responsive web applications using React and Tailwind CSS.",
  },
  {
    id: 2,
    title: "Backend Developer",
    location: "Remote",
    type: "Full-time",
    description: "Develop robust APIs and services using Node.js and MongoDB.",
  },
  {
    id: 3,
    title: "QA Engineer",
    location: "Remote",
    type: "Contract",
    description: "Test web applications and automate test cases for quality assurance.",
  },
  {
    id: 4,
    title: "SEO Expert",
    location: "Remote",
    type: "Contract",
    description: "Test web applications and automate test cases for quality assurance.",
  },
  {
    id: 5,
    title: "Academic Writer",
    location: "Remote",
    type: "Contract",
    description: "Test web applications and automate test cases for quality assurance.",
  },
];

const Career = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const openModal = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedJob(null);
    setIsModalOpen(false);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-6 text-center">Join Our Team</h1>
      <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        At Shezi Tech Solution, we’re passionate about building innovative technology products. We’re always looking for talented and motivated individuals to join our remote-friendly team.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {jobOpenings.map((job) => (
          <div
            key={job.id}
            className="border rounded-lg p-6 shadow hover:shadow-lg transition cursor-pointer"
          >
            <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
            <p className="text-sm text-gray-500 mb-2">
              {job.location} • {job.type}
            </p>
            <p className="text-gray-700 mb-4">{job.description}</p>
            <button
              onClick={() => openModal(job)}
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
            >
              Apply Now
            </button>
          </div>
        ))}
      </div>

      {/* Modal - show ApplyForm when isModalOpen is true */}
      {isModalOpen && (
  <div
    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
    onClick={closeModal}
  >
    <div
      className="bg-white rounded-lg p-6 max-w-3xl w-full relative"
      onClick={(e) => e.stopPropagation()} // Prevent modal close on content click
      style={{
        maxHeight: '70vh',       // Limit height to 70% viewport height
        overflowY: 'auto',      // Enable vertical scroll if content overflows
      }}
    >
      <button
        className="absolute top-2 right-3 text-gray-600 hover:text-gray-900"
        onClick={closeModal}
        aria-label="Close modal"
      >
        &#10005;
      </button>
      <h2 className="text-2xl font-bold mb-4">
        Apply for {selectedJob?.title}
      </h2>
      <ApplyForm
        lookingFor={true}
        resume={true}
        phone={true}
      />
    </div>
  </div>
)}

    </section>
  );
};

export default Career;
