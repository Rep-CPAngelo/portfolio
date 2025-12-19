"use client";
import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Project Alpha",
      category: "Web Development",
      description:
        "A responsive dashboard built with React and D3.js for data visualization.",
      tags: ["React", "D3.js", "Node.js"],
      image: "/api/placeholder/400/300", // Placeholder mainly, will be adjustable
    },
    {
      id: 2,
      title: "Neon Brand",
      category: "Branding",
      description:
        "Complete brand identity and website redesign for a fintech startup.",
      tags: ["Design", "Figma", "Next.js"],
      image: "/api/placeholder/400/300",
    },
    {
      id: 3,
      title: "E-Commerce UI",
      category: "UI/UX Design",
      description:
        "A modern shopping experience focused on conversion and accessibility.",
      tags: ["UX", "Shopify", "Tailwind"],
      image: "/api/placeholder/400/300",
    },
  ];

  return (
    <section id="work" className="section work-section">
      <div className="container">
        <h2 className="section-title">Selected Work</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="card-image">
                {/* 
                  adjustable: User would replace these with <img src="/path.jpg" /> 
                  Using a stylized placeholder div for now to match the color scheme
                */}
                <div className="placeholder-img">
                  <span>{project.title} Preview</span>
                </div>
              </div>
              <div className="card-content">
                <span className="category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="card-links">
                  <a href="#" className="icon-link">
                    <FaExternalLinkAlt />
                  </a>
                  <a href="#" className="icon-link">
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .work-section {
          background-color: var(--primary-dark);
        }

        .section-title {
          font-family: var(--font-outfit);
          color: var(--cream-text);
          margin-bottom: 3rem;
          border-left: 5px solid var(--secondary-blue);
          padding-left: 1rem;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .project-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(148, 180, 193, 0.1);
          border-radius: var(--border-radius);
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
          border-color: var(--secondary-blue);
        }

        .card-image {
          height: 200px;
          background: #1a2938;
          overflow: hidden;
        }

        .placeholder-img {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--soft-blue);
          background: linear-gradient(45deg, #1a2938, #2c4257);
        }

        .card-content {
          padding: 1.5rem;
        }

        .category {
          color: var(--secondary-blue);
          font-size: 0.875rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        h3 {
          font-family: var(--font-outfit);
          color: var(--cream-text);
          margin: 0.5rem 0;
        }

        p {
          color: #a0a0a0;
          font-size: 0.95rem;
          margin-bottom: 1.5rem;
        }

        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .tag {
          background: rgba(84, 119, 146, 0.2);
          color: var(--soft-blue);
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.8rem;
        }

        .card-links {
          display: flex;
          gap: 1rem;
        }

        .icon-link {
          color: var(--cream-text);
          font-size: 1.2rem;
        }

        .icon-link:hover {
          color: var(--secondary-blue);
        }
      `}</style>
    </section>
  );
};

export default Projects;
